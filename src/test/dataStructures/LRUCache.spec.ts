import { LRUCache } from "../../dataStructures";

describe("LRUCache", () => {
  const cache: LRUCache = new LRUCache(4);
  test("insert key-value pairs in cache", () => {
    cache.insertKeyValuePair("a", 1);
    expect(cache.currentSize).toBe(1);
    cache.insertKeyValuePair("b", 2);
    expect(cache.currentSize).toBe(2);
    cache.insertKeyValuePair("c", 3);
    expect(cache.currentSize).toBe(3);
    cache.insertKeyValuePair("d", 4);
    expect(cache.currentSize).toBe(4);
  });

  test("get values by key lookup", () => {
    expect(cache.getValueFromKey("a")).toBe(1);
    expect(cache.getValueFromKey("b")).toBe(2);
    expect(cache.getValueFromKey("c")).toBe(3);
    expect(cache.getValueFromKey("d")).toBe(4);
  });

  test("get values by key lookup", () => {
    cache.insertKeyValuePair("e", 5);
    expect(cache.getValueFromKey("a")).toBeUndefined();
    expect(cache.getValueFromKey("b")).toBe(2);
    expect(cache.getValueFromKey("c")).toBe(3);
    expect(cache.getValueFromKey("d")).toBe(4);
    expect(cache.getValueFromKey("e")).toBe(5);
  });
});
