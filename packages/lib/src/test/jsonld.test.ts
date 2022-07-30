import { check, getAllJsonFromString, getAllJsonLdFromString } from '..';
import {
  docNotJsonLd,
  docWithExhaustiveContext,
  docWithInvalidContext,
  docWithNotExhaustiveContext,
  text,
  docWithAtProperty,
} from './__fixtures__';
import docMissingPropertyMappingNested from './__fixtures__/docMissingPropMapNested.json';
import docNestedWithDotKey from './__fixtures__/docNestedWithDotKey.json';
import vc from './__fixtures__/vc.json';
import docOnlyId from './__fixtures__/docOnlyId.json';
import docNoMappedProp from './__fixtures__/docNoMappedProp.json';
import docOnlyIdOnePropNoMap from './__fixtures__/docOnlyIdOnePropNoMap.json';
import docOnlyIdOneProp from './__fixtures__/docOnlyIdOneProp.json';
import docEmojiAsProp from './__fixtures__/docEmojiAsProp.json';
import customDocumentLoader from './__helpers__/customDocumentLoader';

jest.setTimeout(15 * 1000);

describe('check', () => {
  it('should return true if all properties are in the context', async () => {
    const result = await check(docWithExhaustiveContext);
    expect(result.ok).toBeTruthy();
  });

  it('should return true if doc contains @ properties', async () => {
    const result = await check(docWithAtProperty, customDocumentLoader);
    expect(result.ok).toBeTruthy();
  });

  it('should return true for valid string argument', async () => {
    const result = await check(JSON.stringify(docWithExhaustiveContext));
    expect(result.ok).toBeTruthy();
  });

  it('should return false if some properties are missing from the context', async () => {
    const result = await check(docWithNotExhaustiveContext);
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('MISSING_PROPERTIES_IN_CONTEXT');
    expect(result.error!.details).toEqual('["property3"]');
  });

  it('should return false if argument is a non parseable string', async () => {
    const result = await check('');
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('SyntaxError');
    expect(result.error!.details).toBe('Unexpected end of JSON input');
  });

  it('should return false is doc has invalid context', async () => {
    const result = await check(docWithInvalidContext);
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('jsonld.InvalidUrl');
  });

  it('should return false is doc is not JSON-LD', async () => {
    const result = await check(docNotJsonLd);
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('jsonld.SyntaxError');
    expect(result.error!.details).toBe(
      'Invalid JSON-LD syntax; @context must be an object.'
    );
  });

  it('should return false if there are dropped terms in a nested json ld', async () => {
    const result = await check(docMissingPropertyMappingNested);
    expect(result.ok).toBeFalsy();
  });

  it('should still check correctly if nested doc has dot in key', async () => {
    const result = await check(docNestedWithDotKey);
    expect(result.ok).toBeTruthy();
  });

  it('vc should be valid json ld', async () => {
    const result = await check(vc, customDocumentLoader);
    expect(result.ok).toBeTruthy();
  });

  it('should pass json with no mapped properties', async () => {
    const result = await check(docNoMappedProp, customDocumentLoader);
    expect(result.ok).toBeTruthy();
  });

  it('should pass json with only id', async () => {
    const result = await check(docOnlyId, customDocumentLoader);
    expect(result.ok).toBeTruthy();
  });

  it('should pass json with only one prop', async () => {
    const result = await check(docOnlyIdOneProp, customDocumentLoader);
    expect(result.ok).toBeTruthy();
    const result2 = await check(docOnlyIdOnePropNoMap, customDocumentLoader);
    expect(result2.ok).toBeFalsy();
  });

  it('should pass json with emoji as prop or value', async () => {
    const result = await check(docEmojiAsProp, customDocumentLoader);
    expect(result.ok).toBeTruthy();
  });
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
  it('should return all non exhaustive json-ld contexts', async () => {
    const jsonldObjects = getAllJsonLdFromString(text);
    const promises = jsonldObjects.map(jsonldObject =>
      check(jsonldObject, customDocumentLoader)
    );
    const results = await Promise.all(promises);
    expect(results).toHaveLength(16);
  });
});
