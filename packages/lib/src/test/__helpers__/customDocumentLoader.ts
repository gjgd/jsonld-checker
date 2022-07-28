import defaultDocumentLoader from '../../defaultDocumentLoader';
import VC_CONTEXT from '../__fixtures__/contexts/verifiable-credentials-v1.json';
import VC_EXAMPLE_CONTEXT from '../__fixtures__/contexts/credential-example-v1.json';
import ODRL from '../__fixtures__/contexts/odrl.json';
import TRANSMUTE_WALLET_V1 from '../__fixtures__/contexts/transmute-wallet-v1.json';
import SECURITY_V1 from '../__fixtures__/contexts/security-v1.json';
import SECURITY_V2 from '../__fixtures__/contexts/security-v2.json';
import DID_CONFIGURATION from '../__fixtures__/contexts/did-configuration-v0.json';
import DID_CONTEXT from '../__fixtures__/contexts/did-v1.json';
import SECP256K1_RECOVERY_2020 from '../__fixtures__/contexts/lds-ecdsa-secp256k1-recovery2020-0.0.json';

const CONTEXTS = {
  'https://www.w3.org/2018/credentials/v1': VC_CONTEXT,
  'https://www.w3.org/2018/credentials/examples/v1': VC_EXAMPLE_CONTEXT,
  'https://www.w3.org/ns/did/v1': DID_CONTEXT,
  'https://www.w3.org/ns/odrl.jsonld': ODRL,
  'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json': TRANSMUTE_WALLET_V1,
  'https://w3id.org/security/v1': SECURITY_V1,
  'https://w3id.org/security/v2': SECURITY_V2,
  'https://identity.foundation/.well-known/contexts/did-configuration-v0.0.jsonld': DID_CONFIGURATION,
  'https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld': SECP256K1_RECOVERY_2020,
};

export default async function customDocumentLoader(url: string) {
  if (url in CONTEXTS) {
    return {
      contextUrl: null,
      document: CONTEXTS[url],
      documentUrl: url,
    };
  }
  return defaultDocumentLoader(url);
}
