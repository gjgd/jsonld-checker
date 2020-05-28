import { hasExhaustiveContext } from '../src';

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
