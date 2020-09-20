import { Queue } from "../../dataStructures";

describe("Queue", () => {
  const queue: Queue<number> = new Queue<number>();
  test("dequeue empty queue returns null", () => {
    expect(queue.dequeue()).toBeFalsy();
  });

  test("enqueue node", () => {
    expect(queue.enqueue(5)).toBe(1);
    expect(queue.enqueue(3)).toBe(2);
    expect(queue.enqueue(1)).toBe(3);
  });

  test("dequeue node", () => {
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(1);
  });
});
