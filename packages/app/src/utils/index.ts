import QueryParameterStore from './QueryParameterStore';
// import LocalStorageStore from './LocalStorageStore';

const queryParameters = new QueryParameterStore();
// const localStore = new LocalStorageStore();

const switchTab = (newTab: number) => {
  queryParameters.reset();
  queryParameters.update('tab', `${newTab}`);
};

const updateData = (key: string, value: string): void => {
  queryParameters.update(key, value);
};

const getData = (key: string): string | null => {
  return queryParameters.get(key);
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

export { updateData, getData, getGithubInfo, switchTab };
