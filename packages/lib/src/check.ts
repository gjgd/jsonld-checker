import jsonld from 'jsonld';
import CheckResult from './CheckResult';
import defaultLoader from './defaultDocumentLoader';

// const isNotJsonLdPropery = property => !['@id', '@type'].includes(property);

const check = async (
  jsonldDocument: string | object,
  documentLoader = defaultLoader,
  safe: boolean = false
) => {
  try {
    let jsonldDoc: object;
    if (typeof jsonldDocument === 'string') {
      jsonldDoc = JSON.parse(jsonldDocument);
    } else {
      jsonldDoc = jsonldDocument;
    }

    const unmappedProperties: string[] = [];

    // Remove all keys not present in the jsonld context
    const expanded = await jsonld.expand(jsonldDoc, {
      documentLoader,
      safe,
    });
    await jsonld.compact(expanded, jsonldDoc['@context'], { documentLoader });

    if (unmappedProperties.length === 0) {
      return new CheckResult(true);
    }
    return new CheckResult(
      false,
      'MISSING_PROPERTIES_IN_CONTEXT',
      JSON.stringify(unmappedProperties)
    );
  } catch (err) {
    return new CheckResult(
      false,
      (err as any).name,
      (err as any).message,
      (err as any).details?.event
    );
  }
};

export default check;
