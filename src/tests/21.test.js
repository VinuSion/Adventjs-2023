import { describe, expect, it } from "vitest";
import { findBalancedSegment } from "../challenges/21";

describe("findBalancedSegment", () => {
  it("Should return position 2 and 5 as the longest", () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toStrictEqual([2, 5]);
  });

  it("Should return position 1 and 2 as the longest", () => {
    expect(findBalancedSegment([1, 1, 0])).toStrictEqual([1, 2]);
  });

  it("Should return empty array when theres only 1s", () => {
    expect(findBalancedSegment([1, 1, 1])).toStrictEqual([]);
  });

  it("Should return entire position array as the longest", () => {
    expect(findBalancedSegment([1, 0, 1, 0])).toStrictEqual([0, 3]);
  });

  it("Should return position 1 and 4 as the longest", () => {
    expect(findBalancedSegment([1, 1, 0, 1, 0, 1])).toStrictEqual([1, 4]);
  });

  it("Should return position 0 and 7 as the longest", () => {
    expect(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
    ).toStrictEqual([0, 7]);
  });

  it("Should return position 5 and 10 as the longest", () => {
    expect(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
    ).toStrictEqual([5, 10]);
  });
});
