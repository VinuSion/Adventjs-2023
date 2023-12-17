import { describe, expect, it } from "vitest";
import { optimizeIntervals } from "../challenges/17";

describe("optimizeIntervals", () => {
  it("Should return 1 interval when all of them overlap", () => {
    expect(
      optimizeIntervals([
        [2, 7],
        [3, 4],
        [5, 8],
      ])
    ).toStrictEqual([[2, 8]]);
  });

  it("Should return 1 interval when all of them overlap with different numbers", () => {
    expect(
      optimizeIntervals([
        [3, 4],
        [5, 8],
        [2, 7],
      ])
    ).toStrictEqual([[2, 8]]);
  });

  it("Should return 2 intervals when most of them overlap", () => {
    expect(
      optimizeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
      ])
    ).toStrictEqual([
      [1, 6],
      [8, 10],
    ]);
  });

  it("Should return 3 intervals when none of them overlap", () => {
    expect(
      optimizeIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toStrictEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it("Should return 1 interval when one of them overlap", () => {
    expect(
      optimizeIntervals([
        [5, 7],
        [6, 8],
      ])
    ).toStrictEqual([[5, 8]]);
  });

  it("Should return 1 interval when all of them overlap", () => {
    expect(
      optimizeIntervals([
        [1, 15],
        [8, 12],
        [4, 7],
      ])
    ).toStrictEqual([[1, 15]]);
  });
});
