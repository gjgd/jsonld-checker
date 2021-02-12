import jsonld from 'jsonld';
import { flatten } from 'flat';
import CheckResult from './CheckResult';
import defaultLoader from './defaultDocumentLoader';
import {
  delimiter,
  isNotJsonLdPropery,
  onlyKeepUnique,
  removeArrayArtifacts,
  trimTrailingId,
} from './utils';

const check = async (
  jsonldDocument: string | object,
  documentLoader = defaultLoader
) => {
  try {
    let jsonldDoc: object;
    if (typeof jsonldDocument === 'string') {
      jsonldDoc = JSON.parse(jsonldDocument);
    } else {
      jsonldDoc = jsonldDocument;
    }
    // With this transformation we obtain a modified jsonld doc
    // where all properties not present in the context are dropped
    const expanded = await jsonld.expand(jsonldDoc, { documentLoader });
    const jsonLdDocWithDroppedProperties = await jsonld.compact(
      expanded,
      jsonldDoc['@context'],
      {
        documentLoader,
      }
    );
    // Here we get a list of all properties defined in the context
    // and apply a few transformations to them to clean them up
    const propertiesDefinedInContext = Object.keys(
      flatten(jsonLdDocWithDroppedProperties, { delimiter })
    ).map(removeArrayArtifacts);
    // Here we get a list of all the properties in the jsonld doc
    // and apply a few transformations to them to clean them up
    const allProperties = Object.keys(flatten(jsonldDoc, { delimiter }))
      .filter(isNotJsonLdPropery)
      .map(trimTrailingId)
      .map(removeArrayArtifacts)
      .filter(onlyKeepUnique);
    // Here we compute the difference between the two lists to obtain
    // properties in the jsonld doc that are not defined in the context
    const propertiesDefinedInContextSet = new Set(propertiesDefinedInContext);
    const difference = allProperties.filter(
      property => !propertiesDefinedInContextSet.has(property)
    );
    if (difference.length === 0) {
      return new CheckResult(true);
    }
    return new CheckResult(
      false,
      'MISSING_PROPERTIES_IN_CONTEXT',
      JSON.stringify(difference)
    );
  } catch (err) {
    return new CheckResult(false, err.name, err.message);
  }
};

export default check;
