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
