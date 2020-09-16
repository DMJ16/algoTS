import {
  getNthFibIter,
  getNthFibRecurse,
  getNthFibExp,
  getNthFibDP,
  factorialRecurse,
  factorialIter,
} from "../math";

describe("math algorithms", () => {
  test("fibonacci function recursive solution", () => {
    expect(getNthFibRecurse(0)).toBe(0);
    expect(getNthFibRecurse(1)).toBe(1);
    expect(getNthFibRecurse(2)).toBe(1);
    expect(getNthFibRecurse(3)).toBe(2);
    expect(getNthFibRecurse(4)).toBe(3);
    expect(getNthFibRecurse(5)).toBe(5);
    expect(getNthFibRecurse(6)).toBe(8);
    expect(getNthFibRecurse(7)).toBe(13);
  });

  test("fibonacci function dp solution", () => {
    expect(getNthFibDP(0)).toBe(0);
    expect(getNthFibDP(1)).toBe(1);
    expect(getNthFibDP(2)).toBe(1);
    expect(getNthFibDP(3)).toBe(2);
    expect(getNthFibDP(4)).toBe(3);
    expect(getNthFibDP(5)).toBe(5);
    expect(getNthFibDP(6)).toBe(8);
    expect(getNthFibDP(7)).toBe(13);
  });

  test("fibonacci function iterative solution", () => {
    expect(getNthFibIter(0)).toBe(0);
    expect(getNthFibIter(1)).toBe(1);
    expect(getNthFibIter(2)).toBe(1);
    expect(getNthFibIter(3)).toBe(2);
    expect(getNthFibIter(4)).toBe(3);
    expect(getNthFibIter(5)).toBe(5);
    expect(getNthFibIter(6)).toBe(8);
    expect(getNthFibIter(7)).toBe(13);
  });

  test("fibonacci function exponential solution", () => {
    expect(getNthFibExp(0)).toBe(0);
    expect(getNthFibExp(1)).toBe(1);
    expect(getNthFibExp(2)).toBe(1);
    expect(getNthFibExp(3)).toBe(2);
    expect(getNthFibExp(4)).toBe(3);
    expect(getNthFibExp(5)).toBe(5);
    expect(getNthFibExp(6)).toBe(8);
    expect(getNthFibExp(7)).toBe(13);
  });

  test("factorial function recursive solution", () => {
    expect(factorialRecurse(1)).toBe(1);
    expect(factorialRecurse(2)).toBe(2);
    expect(factorialRecurse(3)).toBe(6);
    expect(factorialRecurse(4)).toBe(24);
    expect(factorialRecurse(5)).toBe(120);
    expect(factorialRecurse(6)).toBe(720);
  });

  test("factorial function iterative solution", () => {
    expect(factorialIter(1)).toBe(1);
    expect(factorialIter(2)).toBe(2);
    expect(factorialIter(3)).toBe(6);
    expect(factorialIter(4)).toBe(24);
    expect(factorialIter(5)).toBe(120);
    expect(factorialIter(6)).toBe(720);
  });
});
