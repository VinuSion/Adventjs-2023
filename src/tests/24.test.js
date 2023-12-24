import { describe, expect, it } from "vitest";
import { getStaircasePaths } from "../challenges/24";

describe("getStaircasePaths", () => {
  it("Should return 5 possible sequences of steps", () => {
    expect(getStaircasePaths(4, 2)).toStrictEqual([
      [1, 1, 1, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 2],
    ]);
  });

  it("Should return empty array when 0 steps are on the stairs", () => {
    expect(getStaircasePaths(0, 0)).toStrictEqual([[]]);
  });

  it("Should return 1 possible sequence of steps", () => {
    expect(getStaircasePaths(1, 1)).toStrictEqual([[1]]);
  });

  it("Should return 45 possible sequences of steps", () => {
    expect(getStaircasePaths(7, 3)).toStrictEqual([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 2, 1, 1],
      [1, 1, 1, 2, 2],
      [1, 1, 1, 3, 1],
      [1, 1, 2, 1, 1, 1],
      [1, 1, 2, 1, 2],
      [1, 1, 2, 2, 1],
      [1, 1, 2, 3],
      [1, 1, 3, 1, 1],
      [1, 1, 3, 2],
      [1, 2, 1, 1, 1, 1],
      [1, 2, 1, 1, 2],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 3],
      [1, 2, 2, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 1],
      [1, 3, 1, 1, 1],
      [1, 3, 1, 2],
      [1, 3, 2, 1],
      [1, 3, 3],
      [2, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 2, 1],
      [2, 1, 1, 3],
      [2, 1, 2, 1, 1],
      [2, 1, 2, 2],
      [2, 1, 3, 1],
      [2, 2, 1, 1, 1],
      [2, 2, 1, 2],
      [2, 2, 2, 1],
      [2, 2, 3],
      [2, 3, 1, 1],
      [2, 3, 2],
      [3, 1, 1, 1, 1],
      [3, 1, 1, 2],
      [3, 1, 2, 1],
      [3, 1, 3],
      [3, 2, 1, 1],
      [3, 2, 2],
      [3, 3, 1],
    ]);
  });

  it("Should return 4 possible sequences of steps", () => {
    expect(getStaircasePaths(3, 3)).toStrictEqual([
      [1, 1, 1],
      [1, 2],
      [2, 1],
      [3],
    ]);
  });

  it("Should return 1 possible sequence of steps", () => {
    expect(getStaircasePaths(2, 1)).toStrictEqual([[1, 1]]);
  });

  it("Should return 8 possible sequence of steps", () => {
    expect(getStaircasePaths(5, 2)).toStrictEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1],
    ]);
  });
});
