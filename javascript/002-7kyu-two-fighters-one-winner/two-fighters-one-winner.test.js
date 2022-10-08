import { beforeEach, describe, expect, it } from "vitest";
import { Fighter, declareWinner } from "./two-fighters-one-winner";

describe("factory function Fighter", () => {
  it("Fighter is a function", () => {
    expect(Fighter).toBeTypeOf("function");
  });

  it.skip("returns an object containing name, health, damage per attack and function tostring", () => {
    const fighter = new Fighter("Toby", 20, 5);

    console.log(fighter);

    const dummy = {
      name: "Juani",
      health: 30,
      damagePerAttack: 3,
      toString: function toString() {},
    };

    console.log(dummy);

    expect(fighter).toEqual(dummy);
  });
});

describe("declareWinner function", () => {
  let fighter1 = {};
  let fighter2 = {};

  beforeEach(() => {
    fighter1 = new Fighter("Toby", 6, 5);
    fighter2 = new Fighter("Juani", 8, 3);
  })

  it("declareWinner is a function", () => {
    expect(declareWinner).toBeTypeOf("function");
  });

  it("throws error with specific message if any of the three mandatory parameters is not defined", () => {
    expect(() => declareWinner()).toThrowError(/parameter/);
    expect(() => declareWinner(fighter1)).toThrowError(/parameter/);
    expect(() => declareWinner(fighter1, fighter2)).toThrowError(/parameter/);
    expect(() => declareWinner(fighter1, fighter2, "Juani")).not.toThrowError(
      /parameter/
    );
  });

  it("throws error with specific message if any of the first two parameters is not an instance of factory function Fighter", () => {
    expect(() => declareWinner(1, fighter2, "Juani")).toThrowError(/instance/);
    expect(() => declareWinner(fighter1, 2, "Juani")).toThrowError(/instance/);
  });

  it("throws error with specific message if provided first attacker name doesn't match with any of the fighters provided", () => {
    expect(() => declareWinner(fighter1, fighter2, "Roko")).toThrowError(
      /name/
    );
  });

  it("returns the name of the winner based on each fighter's parameters", () => {
    expect(declareWinner(fighter1, fighter2, "Juani")).toBe("Juani");
  });
});
