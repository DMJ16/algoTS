import { PriorityQueue } from "../../dataStructures";

describe("PriorityQueue", () => {
  const PQ: PriorityQueue<string> = new PriorityQueue<string>();

  test("enqueue nodes", () => {
    PQ.enqueue("entree", 3);
    expect(PQ.values.length).toBe(1);
    PQ.enqueue("appetizer", 4);
    expect(PQ.values.length).toBe(2);
    PQ.enqueue("dessert", 5);
    expect(PQ.values.length).toBe(3);
    PQ.enqueue("drink", 2);
    expect(PQ.values.length).toBe(4);
    PQ.enqueue("special", 1);
    expect(PQ.values.length).toBe(5);
  });

  test("dequeue nodes", () => {
    const dequeue = PQ.dequeue();
    expect(dequeue.val).toBe("special");
    expect(dequeue.priority).toBe(1);
  });
});
