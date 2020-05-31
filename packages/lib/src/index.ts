import jsonld from 'jsonld';
import CheckResult from './CheckResult';

const CONTEXTS = {};

const nodeDocumentLoader = jsonld.documentLoaders.node();

// change the default document loader
const customLoader = async (url: string) => {
  if (url in CONTEXTS) {
    return {
      contextUrl: null,
      document: await CONTEXTS[url],
      documentUrl: url,
    };
  }
  const res = nodeDocumentLoader(url);
  CONTEXTS[url] = res.document;
  return res;
};

jsonld.documentLoader = customLoader;

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
    const keys = Object.keys(jsonldDoc);
    const newKeysSet = new Set(Object.keys(compacted));
    const difference = keys.filter(key => !newKeysSet.has(key));
    if (difference.length === 0) {
      return new CheckResult(true);
    } else {
      return new CheckResult(
        false,
        'MISSING_PROPERTIES_IN_CONTEXT',
        JSON.stringify(difference)
      );
    }
  } catch (err) {
    return new CheckResult(false, err.name, err.message);
  }
};

const getAllOpenBrackets = (text: string) => {
  const results: number[] = [];
  for (let cursor = 0; cursor < text.length; cursor++) {
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
  const length = text.length;
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

export const getAllJsonFromString = (text: string) => {
  const openBrackets = getAllOpenBrackets(text);
  return openBrackets
    .map(openBracketIndex =>
      getStringUntilMatchingBracket(text, openBracketIndex)
    )
    .filter(Boolean);
};

export const isJsonLdObject = (obj: JSON) => {
  return '@context' in obj;
};

export const getAllJsonLdFromString = (text: string) => {
  return getAllJsonFromString(text).filter(isJsonLdObject);
};
