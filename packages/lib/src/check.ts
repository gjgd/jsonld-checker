import jsonld from 'jsonld';
import { flatten } from 'flat';
import CheckResult from './CheckResult';
import defaultLoader from './defaultDocumentLoader';

const isNotJsonLdPropery = property => !['@id', '@type'].includes(property);

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
    const delimiter = '.';
    // Check which keys have been removed
    let keys = Object.keys(flatten(jsonldDoc, { delimiter }))
      .filter(isNotJsonLdPropery)
      .map(key =>
        key
          .split(delimiter)
          .filter(keyPart => !/^\d+$/.test(keyPart))
          .join(delimiter)
      );
    let compactedKeys = Object.keys(flatten(compacted, { delimiter })).map(
      key =>
        key
          .split(delimiter)
          .filter(keyPart => !/^\d+$/.test(keyPart))
          .join(delimiter)
    );
    keys = keys.filter((key, idx) => keys.indexOf(key) === idx);
    compactedKeys = compactedKeys.filter(
      (key, idx) => compactedKeys.indexOf(key) === idx
    );
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
