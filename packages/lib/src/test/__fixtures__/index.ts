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

const docWithInvalidContext = {
  '@context': 'http://invalid.context.com',
  property1: 'value1',
  property2: 'value1',
  property3: 'value1',
};

const docWithAtProperty = {
  '@context': [
    {
      name: 'https://schema.org/name',
    },
    'https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld',
  ],
  '@type': 'SpecialAnnouncement',
  name: 'Stanford announce COVID-19 testing facility',
};

const docNotJsonLd = { bonjour: 'lol' };

const privateContextUrl = 'https://my-domain.com/private-context.jsonld';
const docWithPrivateContext = {
  '@context': privateContextUrl,
  customProperty: 'customValue',
};

const textPath = path.join(__dirname, './example.html');
const text = fs.readFileSync(textPath).toString();

export {
  context,
  docNotJsonLd,
  docWithExhaustiveContext,
  docWithInvalidContext,
  docWithNotExhaustiveContext,
  docWithAtProperty,
  privateContextUrl,
  docWithPrivateContext,
  text,
};
