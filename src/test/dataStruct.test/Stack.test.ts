import { Stack } from "../../dataStruct";

describe("Stack", () => {
  const stack: Stack<number> = new Stack<number>();

  test("pop empty stack returns null", () => {
    expect(stack.pop()).toBeUndefined();
  });

  test("push node", () => {
    expect(stack.push(10)).toBe(1);
    expect(stack.push(100)).toBe(2);
    expect(stack.push(1)).toBe(3);
    expect(stack.push(5)).toBe(4);
    expect(stack.first?.val).toBe(5);
    expect(stack.last?.val).toBe(10);
  });

  test("pop node", () => {
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(1);
  });
});
