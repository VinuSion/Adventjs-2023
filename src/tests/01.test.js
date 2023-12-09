import { describe, expect, it } from "vitest";
import { findFirstRepeated } from "../challenges/01";

const giftIds = [2, 1, 3, 5, 3, 2];

describe("findFirstRepeated", () => {
  it("Should show 3 because 3 repeats first before 2", () => {
    expect(findFirstRepeated(giftIds)).toBe(3);
  });
});
