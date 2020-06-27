/* eslint-disable import/prefer-default-export */
const updateQueryParameter = (key: string, value: string) => {
  const newUrl = new URLSearchParams(window.location.search);
  newUrl.set(key, value);
  window.history.pushState(null, '', `/?${newUrl.toString()}`);
};

const getQueryParameter = (key: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

export { updateQueryParameter, getQueryParameter };
