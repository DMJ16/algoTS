interface IHashTable {
  keyMap: string[][][];
  hash(key: string): number;
  set(key: string, val: string): void;
  get(key: string): string | undefined;
  keys(): string[];
  values(): string[];
}

export class HashTable implements IHashTable {
  keyMap: string[][][];
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key.charAt(i);
      const val = Math.abs(char.charCodeAt(0) - 96);
      total = (total * WEIRD_PRIME + val) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, val: string): void {
    const idx = this.hash(key);
    if (this.keyMap[idx] === undefined) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, val]);
  }

  get(key: string): string | undefined {
    const idx = this.hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) return this.keyMap[idx][i][1];
      }
    }
    return undefined;
  }

  keys(): string[] {
    const keys: string[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (keys.includes(this.keyMap[i][j][0]) === false) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }

  values(): string[] {
    const values: string[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (values.includes(this.keyMap[i][j][1]) === false) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}
