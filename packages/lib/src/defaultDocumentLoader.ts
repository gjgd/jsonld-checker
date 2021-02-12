import jsonld from 'jsonld';

const CONTEXTS = {};

// From https://github.com/flexdinesh/browser-or-node/blob/master/src/index.js
const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;

const nodeDocumentLoader = isNode
  ? (jsonld as any).documentLoaders.node()
  : (jsonld as any).documentLoaders.xhr();

// change the default document loader
const defaultLoader = async (url: string) => {
  if (url in CONTEXTS) {
    return {
      contextUrl: null,
      document: CONTEXTS[url],
      documentUrl: url,
    };
  }
  const res = await nodeDocumentLoader(url);
  CONTEXTS[url] = res.document;
  return res;
};

export default defaultLoader;
