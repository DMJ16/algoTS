import { MaxBinaryHeap } from "../../dataStructures";

describe("MaxBinaryHeap", () => {
  const heap: MaxBinaryHeap = new MaxBinaryHeap();
  test("insert nodes into heap", () => {
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    heap.insert(1);
    expect(heap.values.length).toBe(8);
    expect(heap.values).toStrictEqual([55, 39, 41, 18, 27, 12, 33, 1]);
  });

  test("extract max value from heap", () => {
    expect(heap.extractMax()).toBe(55);
    expect(heap.values).toStrictEqual([41, 39, 33, 18, 27, 12, 1]);
  });
});
