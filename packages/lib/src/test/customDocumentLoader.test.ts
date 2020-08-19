import { check } from '..';
import { docWithPrivateContext, privateContextUrl } from './__fixtures__';

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
describe('Custom Document Loader', () => {
  it('should return a document with a private context as invalid', async () => {
    const result = await check(docWithPrivateContext);
    expect(result.ok).toBeFalsy();
  });

  it('should use the custom document loader if provided', async () => {
    const result = await check(docWithPrivateContext, customDocumentLoader);
    expect(result.ok).toBeTruthy();
  });
});
