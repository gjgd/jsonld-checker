import { getFiles } from '..';

describe('getFiles', () => {
  it('should return all files in a github repository at a given ref', async () => {
    const files = await getFiles(
      'gjgd',
      'jsonld-checker',
      '17265354e25e82abdb6c7fb12ae6fe0d34ecefdc'
    );
    expect(files).toHaveLength(49);
  });

  it('should return all files in a github repository at HEAD', async () => {
    const files = await getFiles('gjgd', 'jsonld-checker');
    expect(files.length > 0).toBeTruthy();
  });
});
