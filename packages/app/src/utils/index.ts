/* eslint-disable import/prefer-default-export */
const updateQueryParameter = (key: string, value: string) => {
  const newUrl = new URLSearchParams(window.location.search);
  if (newUrl.get(key) !== value) {
    newUrl.set(key, value);
    window.history.pushState(null, '', `/?${newUrl.toString()}`);
  }
};

const getQueryParameter = (key: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

const getGithubInfo = (url: string) => {
  try {
    const parsed = new URL(url);
    const [, userName, repoName] = parsed.pathname.split('/');
    return { userName, repoName };
  } catch (e) {
    return { userName: '', repoName: '' };
  }
};

export { updateQueryParameter, getQueryParameter, getGithubInfo };
