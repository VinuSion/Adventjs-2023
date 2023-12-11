import { describe, expect, it } from "vitest";
import { findFirstRepeated } from "../challenges/01";

describe("findFirstRepeated", () => {
  it("Should return 3 because 3 repeats first before 2", () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3);
  });

  it("Should return 2 when its the same number in the entire array", () => {
    expect(findFirstRepeated([2, 2])).toBe(2);
  });

  it("Should return -1 when there are no repeated numbers", () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toBe(-1);
  });

  it("Should return 1 as the first repeated number", () => {
    expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toBe(1);
  });

  it("Should return -1 when the input array is empty", () => {
    expect(findFirstRepeated([])).toBe(-1);
  });

  it("Should return 2 when it repeats first before 5", () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toBe(2);
  });

  it("Should return 10 when it repeats first before 7 and 0", () => {
    expect(findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])).toBe(10);
  });
});
