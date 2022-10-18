import { describe, it, expect } from "vitest";
import digitalRoot from "./sum-of-digits";

describe("function digitalRoot", () => {
  it("digitalRoot is a function", () => {
    expect(digitalRoot).toBeTypeOf("function");
  });

  it("throws if provided argument is not a number or is NaN", () => {
    expect(() => digitalRoot()).toThrow();
    expect(() => digitalRoot(NaN)).toThrow();
    expect(() => digitalRoot("1")).toThrow();
    expect(() => digitalRoot([1])).toThrow();
    expect(() => digitalRoot(1)).not.toThrow();
  });

  it("returns a type of number", () => {
    expect(digitalRoot(1)).toBeTypeOf("number");
  });

  it("returns the digital root of the provided parameter", () => {
    expect(digitalRoot(16)).toBe(7);
    expect(digitalRoot(942)).toBe(6);
    expect(digitalRoot(132189)).toBe(6);
    expect(digitalRoot(493193)).toBe(2);
  });
});
