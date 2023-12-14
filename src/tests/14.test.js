import { describe, expect, it } from "vitest";
import { maxGifts } from "../challenges/14";

describe("maxGifts", () => {
  it("Should return 4 for 3 + 1", () => {
    expect(maxGifts([1, 2, 3, 1])).toBe(4);
  });

  it("Should return 12 for 9 + 2 + 1", () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toBe(12);
  });

  it("Should return 1 as the only non-zero number in the array", () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toBe(1);
  });

  it("Should return 100 as the only number in the array", () => {
    expect(maxGifts([100])).toBe(100);
  });

  it("Should return 2 for 1 + 1 for even length array", () => {
    expect(maxGifts([1, 1, 1, 1])).toBe(2);
  });

  it("Should return 2 for 1 + 1 for odd length array", () => {
    expect(maxGifts([1, 1, 1])).toBe(2);
  });

  it("Should return 8 for 5 + 3 for odd length array", () => {
    expect(maxGifts([3, 4, 5])).toBe(8);
  });

  it("Should return 99 as the only number in the array", () => {
    expect(maxGifts([99])).toBe(99);
  });
});
