export default interface Store {
  update(key: string, value: string): void;
  get(key: string): string | null;
}
