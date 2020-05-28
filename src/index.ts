import jsonld from 'jsonld';

export const hasExhaustiveContext = async (jsonldDocument: any) => {
  // Remove all keys not present in the jsonld context
  const expanded = await jsonld.expand(jsonldDocument);
  const compacted = await jsonld.compact(expanded, jsonldDocument['@context']);
  // Check which keys have been removed
  const keys = Object.keys(jsonldDocument);
  const newKeysSet = new Set(Object.keys(compacted));
  const difference = keys.filter(key => !newKeysSet.has(key));
  return difference.length === 0;
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

export const getAllJsonFromString = async (text: string) => {
  const openBrackets = getAllOpenBrackets(text);
  return openBrackets
    .map(openBracketIndex =>
      getStringUntilMatchingBracket(text, openBracketIndex)
    )
    .filter(Boolean);
};
