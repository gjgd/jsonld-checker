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
    // Remove all keys not present in the jsonld context
    const expanded = await jsonld.expand(jsonldDoc, { documentLoader });
    const compacted = await jsonld.compact(expanded, jsonldDoc['@context'], {
      documentLoader,
    });
    // Check which keys have been removed
    const keys = Object.keys(flatten(jsonldDoc, { delimiter }))
      .filter(isNotJsonLdPropery)
      .map(trimTrailingId)
      .map(removeArrayArtifacts)
      .filter(onlyKeepUnique);

    const compactedKeys = Object.keys(flatten(compacted, { delimiter }))
      .map(removeArrayArtifacts)
      .filter(onlyKeepUnique);
    const difference = keys.filter(key => !compactedKeys.includes(key));
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
