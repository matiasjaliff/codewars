import { describe, it, expect } from "vitest";
import findOdd from "./find-the-odd-int";

describe("function findOdd", () => {
  it("findOdd is a function", () => {
    expect(findOdd).toBeTypeOf("function");
  });

  it.skip("throws if the provided parameter is not an array", () => {
    expect(() => findOdd()).toThrow();
    expect(() => findOdd(1)).toThrow();
    expect(() => findOdd("1")).toThrow();
    expect(() => findOdd([1])).not.toThrow();
  });

  it("throws if empty array is provided", () => {
    expect(() => findOdd([])).toThrowError(/empty/);
  });

  it.skip("throws if any element of the provided array is not a number", () => {
    expect(() => findOdd([1, 2, "3"])).toThrow();
    expect(() => findOdd([1, 2, [3]])).toThrow();
    expect(() => findOdd([1])).not.toThrow();
  });

  it("returns the only number of the provided array that occurs an odd number of times in that array", () => {
    expect(findOdd([1, 1, 2])).toBe(2);
  });
});
