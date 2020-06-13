import fs from 'fs';
import path from 'path';

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

const textPath = path.join(__dirname, './example.html');
const text = fs.readFileSync(textPath).toString();

export { context, docWithExhaustiveContext, docWithNotExhaustiveContext, text };
