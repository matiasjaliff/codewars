import { describe, it, expect } from "vitest";
import solution from "./reversed-strings";

describe("function solution", () => {
  it("solution is a function", () => {
    expect(solution).toBeTypeOf("function");
  });

  it.skip("solution receives only one parameter of type string", () => {
    expect(() => solution()).toThrow();
    expect(() => solution(1)).toThrow();
  });

  it("returns a string", () => {
    expect(solution("Toby")).toBeTypeOf("string");
  });

  it("returns the reversed version of the input string", () => {
    expect(solution("Toby")).toBe("yboT");
  });
});
