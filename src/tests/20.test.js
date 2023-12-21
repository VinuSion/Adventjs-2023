import { describe, expect, it } from "vitest";
import { distributeGifts } from "../challenges/20";

describe("distributeGifts", () => {
  it("Should return a fair average of weight values", () => {
    expect(
      distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
      ])
    ).toStrictEqual([
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ]);
  });

  it("Should return a small average of weight values with small matrix", () => {
    expect(
      distributeGifts([
        [2, null],
        [null, 3],
      ])
    ).toStrictEqual([
      [2, 3],
      [3, 3],
    ]);
  });

  it("Should return a small average of weight values with small and non-square matrix", () => {
    expect(
      distributeGifts([
        [2, 1, 1],
        [3, 4, null],
      ])
    ).toStrictEqual([
      [2, 2, 1],
      [3, 3, 3],
    ]);
  });

  it("Should return a decent average of weight values with mostly null values", () => {
    expect(
      distributeGifts([
        [null, 5],
        [3, null],
      ])
    ).toStrictEqual([
      [4, 5],
      [3, 4],
    ]);
  });

  it("Should return a decent average of weight values with no null values", () => {
    expect(
      distributeGifts([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual([
      [2, 3, 4],
      [4, 5, 6],
      [6, 7, 8],
    ]);
  });

  it("Should return the same average of weight values with no mostly null and same number values", () => {
    expect(
      distributeGifts([
        [null, 1, null, 1, null],
        [1, null, 1, null, 1],
      ])
    ).toStrictEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]);
  });
});
