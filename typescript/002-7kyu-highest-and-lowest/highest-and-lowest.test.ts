import { describe, it, expect } from "vitest";
import Kata from "./highest-and-lowest";

describe("class Kata", () => {
  it("Kata is a class", () => {
    expect(Kata).toBeTypeOf("function");
  });

  it("highAndLow is a method of Kata", () => {
    expect(Kata.highAndLow).toBeTypeOf("function");
  });

  it.skip("highAndLow receives a parameter of type string", () => {
    expect(Kata.highAndLow(1)).toThrow();
  });

  it.skip("highAndLow returns a string", () => {
    expect(Kata.highAndLow("Toby")).toBeTypeOf("string");
  });

  it("highAndLow returns the highest and the lowest numbers of the input string", () => {
    expect(Kata.highAndLow("-1 0 1")).toBe("1 -1");
  });
});
