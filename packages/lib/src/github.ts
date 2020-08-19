const fetch = require('node-fetch');

const githubApi = async endpoint => {
  return fetch(`https://api.github.com/repos/${endpoint}`).then(res =>
    res.json()
  );
};

const getFiles = async (user, repo, ref = 'HEAD') => {
  const all = await githubApi(`${user}/${repo}/git/trees/${ref}?recursive=1`);
  const files = all.tree.filter(node => node.type === 'blob');
  return files;
};

export default getFiles;
