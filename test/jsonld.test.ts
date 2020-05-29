import fs from 'fs';
import path from 'path';
import {
  check,
  getAllJsonFromString,
  getAllJsonLdFromString,
} from '../src';

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

describe('hasExhaustiveContext', () => {
  it('should return true if all properties are in the context', async () => {
    const result = await hasExhaustiveContext(docWithExhaustiveContext);
    expect(result).toBeTruthy();
  });

  it('should return false if some properties are missing from the context', async () => {
    const result = await hasExhaustiveContext(docWithNotExhaustiveContext);
    expect(result).toBeFalsy();
  });
});

describe('getAllJsonLdFromString', () => {
  const textPath = path.join(__dirname, './__fixtures__/example.html');
  const text = fs.readFileSync(textPath).toString();

  it('should return all JSON objects from the page', () => {
    const results = getAllJsonFromString(text);
    expect(results).toHaveLength(51);
  });

  it('should return all JSON-LD objects from the page', () => {
    const results = getAllJsonLdFromString(text);
    expect(results).toHaveLength(16);
  });
});
