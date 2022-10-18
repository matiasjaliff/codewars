import { describe, it, expect } from "vitest";
import likes from "./who-likes-this";

describe("function likes", () => {
  it("likes is a function", () => {
    expect(likes).toBeTypeOf("function");
  });

  it("throws if provided parameter is not an array", () => {
    expect(() => likes()).toThrowError(/array/);
    expect(() => likes(1)).toThrowError(/array/);
    expect(() => likes(1, 2)).toThrowError(/array/);
    expect(() => likes("Peter")).toThrowError(/array/);
    expect(() => likes({ name: "Peter" })).toThrowError(/array/);
    expect(() => likes(["Peter"])).not.toThrowError(/array/);
  });

  it("throws if any element of the array is not a string", () => {
    expect(() => likes([1, "Peter"])).toThrowError(/strings/);
    expect(() => likes(["Peter", ["Tom"]])).toThrowError(/strings/);
    expect(() => likes(["Peter", { name: "Tom" }])).toThrowError(/strings/);
    expect(() => likes(["Peter", "Tom"])).not.toThrowError(/strings/);
  });

  it("returns a string", () => {
    expect(likes([])).toBeTypeOf("string");
    expect(likes(["Peter"])).toBeTypeOf("string");
  });

  it("returns specific message depending on the length of the provided parameter", () => {
    expect(likes([])).toBe("no one likes this");
    expect(likes(["Peter"])).toBe("Peter likes this");
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
    expect(likes(["Alex", "Jacob", "Mark", "Max", "Tom"])).toBe(
      "Alex, Jacob and 3 others like this"
    );
  });
});
