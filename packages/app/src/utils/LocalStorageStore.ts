import Store from './Store';

export default class LocalStorageStore implements Store {
  private storage = localStorage;

  public update(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  public get(key: string): string | null {
    return this.storage.getItem(key);
  }
}
