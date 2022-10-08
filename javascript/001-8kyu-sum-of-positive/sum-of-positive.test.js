import { describe, it, expect } from "vitest";
import { positiveSum } from "./sum-of-positive";

describe("function positiveSum", () => {
  it("positiveSum is a function", () => {
    expect(positiveSum).toBeTypeOf("function");
  });

  it("throws error with specific message if provided parameter is not an array", () => {
    expect(() => positiveSum()).toThrowError(/array/);
    expect(() => positiveSum(1)).toThrowError(/array/);
    expect(() => positiveSum(true)).toThrowError(/array/);
    expect(() => positiveSum({})).toThrowError(/array/);
    expect(() => positiveSum([])).not.toThrowError();
  });

  it("throws error with specific message if any element of the string is not a number", () => {
    expect(() => positiveSum([0, 1, "a"])).toThrowError(/number/);
    expect(() => positiveSum([0, 1, false])).toThrowError(/number/);
    expect(() => positiveSum([0, 1, NaN])).toThrowError(/number/);
    expect(() => positiveSum([0, 1, 2])).not.toThrowError();
  });

  it("returns a type of number", () => {
    expect(positiveSum([])).toBeTypeOf("number");
  });

  it("returns 0 if the array is empty", () => {
    expect(positiveSum([])).toBe(0);
  });

  it("returns the sum of the positive numbers of the array", () => {
    expect(positiveSum([1,-4,7,12])).toBe(20);
    expect(positiveSum([-1,-4,7,12])).toBe(19);
  })
});
