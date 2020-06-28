import jsonld from 'jsonld';
import CheckResult from './CheckResult';

// TODO: refactor
export * from './github';

const CONTEXTS = {};

// From https://github.com/flexdinesh/browser-or-node/blob/master/src/index.js
const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;

const nodeDocumentLoader = isNode
  ? jsonld.documentLoaders.node()
  : jsonld.documentLoaders.xhr();

// change the default document loader
const customLoader = async (url: string) => {
  if (url in CONTEXTS) {
    return {
      contextUrl: null,
      document: CONTEXTS[url],
      documentUrl: url,
    };
  }
  const res = await nodeDocumentLoader(url);
  CONTEXTS[url] = res.document;
  return res;
};

jsonld.documentLoader = customLoader;

const isNotJsonLdPropery = property => !['@id', '@type'].includes(property);

export const check = async (jsonldDocument: string | object) => {
  try {
    let jsonldDoc: object;
    if (typeof jsonldDocument === 'string') {
      jsonldDoc = JSON.parse(jsonldDocument);
    } else {
      jsonldDoc = jsonldDocument;
    }
    // Remove all keys not present in the jsonld context
    const expanded = await jsonld.expand(jsonldDoc);
    const compacted = await jsonld.compact(expanded, jsonldDoc['@context']);
    // Check which keys have been removed
    const keys = Object.keys(jsonldDoc).filter(isNotJsonLdPropery);
    const newKeysSet = new Set(Object.keys(compacted));
    const difference = keys.filter(key => !newKeysSet.has(key));
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

const getAllOpenBrackets = (text: string) => {
  const results: number[] = [];
  for (let cursor = 0; cursor < text.length; cursor += 1) {
    if (text[cursor] === '{') {
      results.push(cursor);
    }
  }
  return results;
};

const getStringUntilMatchingBracket = (
  text: string,
  openBracketIndex: number
) => {
  let substring = text[openBracketIndex];
  if (substring !== '{') {
    throw new Error('start must be the index of an opening bracket');
  }
  let bracketCount = 1;
  let cursor = openBracketIndex + 1;
  const { length } = text;
  while (bracketCount !== 0 && cursor < length) {
    const currentChar = text[cursor];
    if (currentChar === '{') {
      bracketCount += 1;
    } else if (currentChar === '}') {
      bracketCount -= 1;
    }
    cursor += 1;
    substring += currentChar;
  }
  try {
    return JSON.parse(substring);
  } catch (e) {
    return null;
  }
};

export const getAllJsonFromString = (text: string): Array<Object> => {
  const openBrackets = getAllOpenBrackets(text);
  return openBrackets
    .map(openBracketIndex =>
      getStringUntilMatchingBracket(text, openBracketIndex)
    )
    .filter(Boolean);
};

export const isJsonLdObject = (obj: Object): Boolean => {
  return '@context' in obj;
};

export const getAllJsonLdFromString = (text: string) => {
  return getAllJsonFromString(text).filter(obj => isJsonLdObject(obj));
};

export { CheckResult };
