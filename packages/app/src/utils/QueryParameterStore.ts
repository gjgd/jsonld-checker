/* eslint-disable class-methods-use-this */
import Store from './Store';

export default class QueryParameterStore implements Store {
  public update(key: string, value: string): void {
    const newUrl = new URLSearchParams(window.location.search);
    if (newUrl.get(key) !== value) {
      newUrl.set(key, value);
      window.history.pushState(null, '', `/?${newUrl.toString()}`);
    }
    if (value === '') {
      newUrl.delete(key);
      window.history.pushState(null, '', `/?${newUrl.toString()}`);
    }
  }

  public get(key: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }

  public reset() {
    window.history.pushState(null, '', `/?`);
  }
}
