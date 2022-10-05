import { describe, it, expect } from "vitest";
import { howMuchILoveYou } from "./i-love-you";

describe("I love you", () => {
  it("howMuchILoveYou is a function", () => {
    expect(howMuchILoveYou).toBeTypeOf("function");
  });

  it("throw error with specific message if no argument is provided", () => {
    expect(() => howMuchILoveYou()).toThrowError("argument must be provided");
  });

  it("throw error with specific message if provided argument is not a number", () => {
    expect(() => howMuchILoveYou(null)).toThrowError(
      "provided argument must be a number"
    );
    expect(() => howMuchILoveYou(true)).toThrowError(
      "provided argument must be a number"
    );
    expect(() => howMuchILoveYou("foo")).toThrowError(
      "provided argument must be a number"
    );
    expect(() => howMuchILoveYou([])).toThrowError(
      "provided argument must be a number"
    );
    expect(() => howMuchILoveYou(NaN)).toThrowError(
      "provided argument must be a number"
    );
  });

  it("throw error with specific message if number provided is not positive", () => {
    expect(() => howMuchILoveYou(0)).toThrowError(
      "provided number must be positive"
    );
    expect(() => howMuchILoveYou(-1)).toThrowError(
      "provided number must be positive"
    );
  });

  it("throw error with specific message if number provided is not integer", () => {
    expect(() => howMuchILoveYou(1.5)).toThrowError(
      "provided number must be an integer"
    );
  });

  it("returns 'I love you' if number provided is 1", () => {
    expect(howMuchILoveYou(1)).toBe("I love you");
  });

  it("returns the corresponding phrase for each number", () => {
    expect(howMuchILoveYou(7)).toBe("I love you");
    expect(howMuchILoveYou(2)).toBe("a little");
    expect(howMuchILoveYou(3)).toBe("a lot");
    expect(howMuchILoveYou(4)).toBe("passionately");
    expect(howMuchILoveYou(5)).toBe("madly");
    expect(howMuchILoveYou(6)).toBe("not at all");
  })

});
