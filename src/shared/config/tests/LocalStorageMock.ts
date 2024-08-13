class LocalStorageMock implements Storage {
  store: Record<string, string> = {};

  static addToWindow(): LocalStorageMock {
    const localStorageMock = new LocalStorageMock();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    return localStorageMock;
  }

  constructor() {
    this.store = {};
  }

  add(data: Record<string, string>) {
    Object.entries(data).forEach(([name, value]) => {
      this.setItem(name, value);
    });
  }

  clear() {
    this.store = {};
  }

  getItem(name: string): string {
    return this.store[name] || null;
  }

  setItem(name: string, value: string) {
    this.store[name] = String(value);
  }

  removeItem(name: string) {
    delete this.store[name];
  }

  get length() {
    return Object.keys(this.store).length;
  }

  key(index: number): string | null {
    return Object.values(this.store).at(index) || null;
  }
}

export default LocalStorageMock;
