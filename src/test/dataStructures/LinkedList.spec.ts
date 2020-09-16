import { LinkedList } from "../../dataStruct";

describe("LinkedList", () => {
  const list: LinkedList<number> = new LinkedList<number>();
  test("push, insert and get new nodes", () => {
    list.push(6);
    list.push(36);
    list.insert(2, 30);
    list.push(100);
    expect(list.len).toBe(4);
    expect(list.head?.val).toBe(6);
    expect(list.tail?.val).toBe(100);
    expect(list.get(1)?.val).toBe(36);
    expect(list.get(2)?.val).toBe(30);
  });

  test("set node", () => {
    expect(list.set(3, 101)).toBe(true);
    expect(list.tail?.val).toBe(101);
    expect(list.set(3, 100)).toBe(true);
    expect(list.tail?.val).toBe(100);
  });

  test("remove and pop nodes", () => {
    const removedNode = list.remove(1);
    expect(removedNode?.val).toBe(36);
    expect(removedNode?.next).toBeUndefined();
    const poppedNode = list.pop();
    expect(poppedNode?.val).toBe(100);
    expect(list.len).toBe(2);
    list.push(100);
  });

  test("shift and unshift nodes", () => {
    list.unshift(50000);
    list.shift();
    expect(list.len).toBe(3);
    expect(list.head?.val).toBe(6);
    list.unshift(50000);
    expect(list.len).toBe(4);
    expect(list.head?.val).toBe(50000);
  });

  test("reverse list and shift nodes", () => {
    list.reverse();
    expect(list.shift()?.val).toBe(100);
    expect(list.shift()?.val).toBe(30);
    expect(list.shift()?.val).toBe(6);
    expect(list.shift()?.val).toBe(50000);
  });
});
