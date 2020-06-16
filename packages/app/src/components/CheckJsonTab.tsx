import Button from '@material-ui/core/Button';
import { check } from 'jsonld-checker';
import React from 'react';
import JsonLdCheckResult from '../models/JsonLDCheckResult';
import CheckResult from './CheckResult';
import JsonEditor from './JsonEditor';

const defaultValue = JSON.stringify(
  {
    '@context': [
      'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
    ],
    id: 'did:example:123',
    type: ['CachedDIDDocument'],
    name: 'Farming Sensor DID Document',
    image: 'https://via.placeholder.com/150',
    description: 'An IoT device in the middle of a corn field.',
    tags: ['professional'],
    correlation: ['4058a72a-9523-11ea-bb37-0242ac130002'],
    created: '2017-06-18T21:19:10Z',
    expires: '2026-06-18T21:19:10Z',
    didDocument: {
      '@context': 'https://w3id.org/did/v0.11',
      id: 'did:example:123',
      assertionMethod: [
        'did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN',
      ],
      authentication: [
        'did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN',
      ],
      capabilityDelegation: [
        'did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN',
      ],
      capabilityInvocation: [
        'did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN',
      ],
      keyAgreement: [
        {
          id: 'did:example:123#zC5iai1sL93gQxn8LKh1i42fTbpfar65dVx4NYznYfG3Y5',
          type: 'X25519KeyAgreementKey2019',
          controller: 'did:example:123',
          publicKeyBase58: '6DrzegWwfw8Xg5MsHX95sVnJaPmtXP214B5X9hkG9oRs',
        },
      ],
      publicKey: [
        {
          id:
            'did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN',
          type: 'Ed25519VerificationKey2018',
          controller: 'did:example:123',
          publicKeyBase58: 'DqS5F3GVe3rCxucgi4JBNagjv4dKoHc8TDLDw9kR58Pz',
        },
      ],
    },
  },
  null,
  2
);

const CheckJsonTab: React.FunctionComponent<{}> = () => {
  const [jsonValue, setJsonValue] = React.useState(defaultValue);
  const [result, setResult] = React.useState<JsonLdCheckResult>();

  const onChange = (value: string) => {
    setResult(undefined);
    setJsonValue(value);
  };

  const onClickCheck = async () => {
    const res = await check(jsonValue);
    setResult(res);
  };

  return (
    <>
      <Button variant="contained" onClick={onClickCheck}>
        Check
      </Button>
      <CheckResult result={result} />
      <JsonEditor onChange={onChange} value={jsonValue} />
    </>
  );
};

export default CheckJsonTab;
