# JSONLD Checker

https:/jsonld-checker.gjgd.xyz

## Getting started with the lib:

### Install

```bash
npm install jsonld-checker
```

### Verifying JSON-LD

```js
const validJsonLd = {
  "@context": [
    "https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json"
  ],
  "id": "did:example:123456789abcdefghi",
  "type": "Person",
  "name": "John Smith",
  "image": "https://via.placeholder.com/150",
  "description": "Professional software developer for Acme Corp.",
  "tags": [
    "professional",
    "person"
  ],
  "correlation": [
    "4058a72a-9523-11ea-bb37-0242ac130002"
  ]
};

const resultOk = await jsonldChecker.check(validJsonLd);
/*
CheckResult { ok: true, error: { type: '', details: '' } }
*/
console.log(resultOk);
```

```js
const invalidJsonLd = {
  "@context": [
    "https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json"
  ],
  "id": "did:example:123",
  "type": [
    "CachedDIDDocument"
  ],
  "name": "Farming Sensor DID Document",
  "image": "https://via.placeholder.com/150",
  "description": "An IoT device in the middle of a corn field.",
  "tags": [
    "professional"
  ],
  "correlation": [
    "4058a72a-9523-11ea-bb37-0242ac130002"
  ],
  "created": "2017-06-18T21:19:10Z",
  "expires": "2026-06-18T21:19:10Z",
  "didDocument": {
    "@context": "https://w3id.org/did/v0.11",
    "id": "did:example:123",
    "assertionMethod": [
      "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"
    ],
    "authentication": [
      "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"
    ],
    "capabilityDelegation": [
      "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"
    ],
    "capabilityInvocation": [
      "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"
    ],
    "keyAgreement": [
      {
        "id": "did:example:123#zC5iai1sL93gQxn8LKh1i42fTbpfar65dVx4NYznYfG3Y5",
        "type": "X25519KeyAgreementKey2019",
        "controller": "did:example:123",
        "publicKeyBase58": "6DrzegWwfw8Xg5MsHX95sVnJaPmtXP214B5X9hkG9oRs"
      }
    ],
    "publicKey": [
      {
        "id": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "type": "Ed25519VerificationKey2018",
        "controller": "did:example:123",
        "publicKeyBase58": "DqS5F3GVe3rCxucgi4JBNagjv4dKoHc8TDLDw9kR58Pz"
      }
    ]
  }
};

const resultNotOk = await jsonldChecker.check(invalidJsonLd);
/*
CheckResult {
  ok: false,
  error: { type: 'MISSING_PROPERTIES_IN_CONTEXT', details: '["didDocument"]' }
}
*/
console.log(resultNotOk);
```

### Passing a custom document loader

The lib supports passing a custom document loader to the check function:

```js
const privateContextUrl = 'https://my-domain.com/private-context.jsonld';
// A document with a private context that cannot be resolved by the default document loader
const docWithPrivateContext = {
  '@context': privateContextUrl,
  customProperty: 'customValue',
};

// A custom document loader that can resolve a private context
const customDocumentLoader = async (url: string) => {
  if (url === privateContextUrl) {
    return {
      contextUrl: null,
      document: {
        '@context': {
          customProperty: 'https://custom-url.test',
        },
      },
      documentUrl: url,
    };
  }
  return {};
};

const result = await check(docWithPrivateContext, customDocumentLoader);
/*
CheckResult { ok: true, error: { type: '', details: '' } }
*/
```

# Useful links

- https://github.com/digitalbazaar/jsonld.js
- https://json-ld.org/playground/
- https://transmute-industries.github.io/universal-wallet/
- https://material-ui.com
- https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets
