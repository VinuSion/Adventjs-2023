import { describe, expect, it } from "vitest";
import { revealSabotage } from "../challenges/19";

describe("revealSabotage", () => {
  it("Should return various counts of adjacent toys for 3 sabotaged ones", () => {
    expect(
      revealSabotage([
        ["*", " ", " ", " "],
        [" ", " ", "*", " "],
        [" ", " ", " ", " "],
        ["*", " ", " ", " "],
      ])
    ).toStrictEqual([
      ["*", "2", "1", "1"],
      ["1", "2", "*", "1"],
      ["1", "2", "1", "1"],
      ["*", "1", " ", " "],
    ]);
  });

  it("Should return various counts of adjacent toys for 1 sabotaged one", () => {
    expect(
      revealSabotage([
        [" ", " ", " "],
        [" ", "*", " "],
        [" ", " ", " "],
      ])
    ).toStrictEqual([
      ["1", "1", "1"],
      ["1", "*", "1"],
      ["1", "1", "1"],
    ]);
  });

  it("Should return various counts of adjacent toys for 3 diagonally sabotaged ones", () => {
    expect(
      revealSabotage([
        ["*", " ", " "],
        [" ", "*", " "],
        [" ", " ", "*"],
      ])
    ).toStrictEqual([
      ["*", "2", "1"],
      ["2", "*", "2"],
      ["1", "2", "*"],
    ]);
  });

  it("Should return few counts of adjacent toys for 1 diagonally sabotaged one", () => {
    expect(
      revealSabotage([
        ["*", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ])
    ).toStrictEqual([
      ["*", "1", " "],
      ["1", "1", " "],
      [" ", " ", " "],
    ]);
  });

  it("Should return 8 counts of one adjacent toy for many sabotaged ones", () => {
    expect(
      revealSabotage([
        ["*", "*", "*"],
        ["*", " ", "*"],
        ["*", "*", "*"],
      ])
    ).toStrictEqual([
      ["*", "*", "*"],
      ["*", "8", "*"],
      ["*", "*", "*"],
    ]);
  });

  it("Should return 2 counts of one adjacent toy for mostly sabotaged ones", () => {
    expect(revealSabotage([["*", " ", "*"]])).toStrictEqual([["*", "2", "*"]]);
  });

  it("Should return few counts of adjacent toys for 2 corner-stone sabotaged ones", () => {
    expect(
      revealSabotage([
        ["*", " ", " "],
        [" ", " ", " "],
        [" ", " ", "*"],
      ])
    ).toStrictEqual([
      ["*", "1", " "],
      ["1", "2", "1"],
      [" ", "1", "*"],
    ]);
  });

  it("Should return few counts of adjacent toys for 3 diagonally space-out sabotaged ones", () => {
    expect(
      revealSabotage([
        ["*", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", "*", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "*"],
      ])
    ).toStrictEqual([
      ["*", "1", " ", " ", " "],
      ["1", "2", "1", "1", " "],
      [" ", "1", "*", "1", " "],
      [" ", "1", "1", "2", "1"],
      [" ", " ", " ", "1", "*"],
    ]);
  });
});
