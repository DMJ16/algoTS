import { binarySearch, kmpSearch } from "../search";

describe("search algorithms", () => {
  test("kmpSearch return frequency of substring occurence", () => {
    expect(kmpSearch("hannahhahhahahahhahahahannah", "hannah")).toBe(2);
    expect(kmpSearch("hannahhahhahahahhahahahannah", "dsds")).toBe(0);
    expect(kmpSearch("hannahhahhahahahhahahahannah", "ha")).toBe(9);
    expect(kmpSearch("hannahhahhahahah hahah     ahannah", "hannah")).toBe(2);
  });

  test("binarySearch return index or -1 if search val not found", () => {
    expect(binarySearch([1, 2, 58, 99, 100], 100)).toBe(4);
    expect(binarySearch([1, 2, 5, 99, 10], 5)).toBe(2);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)).toBe(4);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1000)).toBe(-1);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50)).toBe(-1);
  });
});
