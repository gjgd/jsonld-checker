import fs from 'fs';
import path from 'path';
import { check, getAllJsonFromString, getAllJsonLdFromString } from '..';

const context = [
  {
    test: 'http://test.com#',
    property1: 'test:1',
    property2: 'test:2',
  },
];

const docWithExhaustiveContext = {
  '@context': context,
  property1: 'value1',
  property2: 'value2',
};

const docWithNotExhaustiveContext = {
  '@context': context,
  property1: 'value1',
  property2: 'value1',
  property3: 'value1',
};

const textPath = path.join(__dirname, './__fixtures__/example.html');
const text = fs.readFileSync(textPath).toString();

describe.only('hasExhaustiveContext', () => {
  it('should return true if all properties are in the context', async () => {
    const result = await check(docWithExhaustiveContext);
    expect(result.ok).toBeTruthy();
  });

  it('should return false if some properties are missing from the context', async () => {
    const result = await check(docWithNotExhaustiveContext);
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('MISSING_PROPERTIES_IN_CONTEXT');
    expect(result.error!.details).toEqual(['property3']);
  });

  it('should return false if argument is a non parseable string', async () => {
    const result = await check('{');
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('NOT_JSON');
  });

  // TODO add test about invalid context

  // TODO add test: {"bonjour": "lol"}
  // TODO add test positive test for string arg
});

describe('getAllJsonLdFromString', () => {
  it('should return all JSON objects from the page', () => {
    const results = getAllJsonFromString(text);
    expect(results).toHaveLength(51);
  });

  it('should return all JSON-LD objects from the page', () => {
    const results = getAllJsonLdFromString(text);
    expect(results).toHaveLength(16);
  });
});

describe('integration', () => {
  it("should return all non exhaustive json-ld contexts", async () => {
    const lol = "mdrr";
    const jsonldObjects = getAllJsonLdFromString(text);
    const promises = jsonldObjects.map(check);
    const results = await Promise.all(promises);
    expect(results).toHaveLength(16);
  });
});
