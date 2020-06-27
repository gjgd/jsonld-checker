/* eslint-disable import/prefer-default-export */
const updateQueryString = (key: string, value: string) => {
  const newUrl = new URLSearchParams(window.location.search);
  newUrl.set(key, value);
  window.history.pushState(null, '', `/?${newUrl.toString()}`);
};

export { updateQueryString };
