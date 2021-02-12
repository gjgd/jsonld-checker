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

const delimiter = '.';

const isNotJsonLdPropery = property => !['@id', '@type'].includes(property);

// removeArrayArtifacts("type.0") returns "type"
const removeArrayArtifacts = key =>
  key
    .split(delimiter)
    .filter(keyPart => !/^\d+$/.test(keyPart))
    .join(delimiter);

// [1, 2, 3, 2, 1].filter(onlyKeepUnique) returns [ 1, 2, 3 ]
const onlyKeepUnique = (key, idx, array) => array.indexOf(key) === idx;

// trimTrailingId("credentialSubject.id") returns "credentialSubject"
const trimTrailingId = flattenedProperty =>
  flattenedProperty.replace(/\.id$/, '');

export {
  getAllJsonFromString,
  getAllJsonLdFromString,
  isJsonLdObject,
  isNotJsonLdPropery,
  onlyKeepUnique,
  removeArrayArtifacts,
  trimTrailingId,
  delimiter,
};
