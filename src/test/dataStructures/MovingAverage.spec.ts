import { MovingAverage } from "../../dataStructures";

describe("MovingAverage", () => {
  const movingAverage = new MovingAverage(3);

  test("next", () => {
    expect(movingAverage.next(3)).toBe(3);
    expect(movingAverage.next(5)).toBe(4);
    expect(movingAverage.next(7)).toBe(5);
    expect(movingAverage.next(6)).toBe(6);
    expect(movingAverage.next(100)).toBe(37.66666666666667);
  });
});
