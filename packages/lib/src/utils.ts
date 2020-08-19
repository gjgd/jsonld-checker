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

const getAllJsonFromString = (text: string): Array<Object> => {
  const openBrackets = getAllOpenBrackets(text);
  return openBrackets
    .map(openBracketIndex =>
      getStringUntilMatchingBracket(text, openBracketIndex)
    )
    .filter(Boolean);
};

const isJsonLdObject = (obj: Object): Boolean => {
  return '@context' in obj;
};

const getAllJsonLdFromString = (text: string) => {
  return getAllJsonFromString(text).filter(obj => isJsonLdObject(obj));
};

export { getAllJsonLdFromString, isJsonLdObject, getAllJsonFromString };
