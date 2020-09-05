import QueryParameterStore from './QueryParameterStore';
import LocalStorageStore from './LocalStorageStore';
import defaultValueJson from '../data/defaultValue.json';

const queryParameters = new QueryParameterStore();
const localStore = new LocalStorageStore();

const switchTab = (newTab: number) => {
  queryParameters.reset();
  queryParameters.update('tab', `${newTab}`);
};

const updateData = (key: string, value: string): void => {
  queryParameters.update(key, value);
  localStore.update(key, value);
};

const getData = (key: string): string => {
  // First see if url contains the data
  const queryParameterData = queryParameters.get(key);
  if (queryParameterData) {
    console.debug(`Loading ${key} from query parameters`);
    return decodeURIComponent(queryParameterData);
  }
  // Then see if local store contains the data
  const localStorageData = localStore.get(key);
  if (localStorageData) {
    console.debug(`Loading ${key} from local storage`);
    return decodeURIComponent(localStorageData);
  }
  // Else return a default value
  switch (key) {
    case 'url':
      return 'https://raw.githubusercontent.com/w3c-ccg/universal-wallet-interop-spec/master/docs/index.html';
    case 'repo':
      return 'https://github.com/w3c-ccg/universal-wallet-interop-spec';
    case 'json':
      return JSON.stringify(defaultValueJson, null, 2);
    case 'tab':
      return '0';
    default:
      throw new Error(`Unkown data key: ${key}`);
  }
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
