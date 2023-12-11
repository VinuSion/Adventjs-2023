import { describe, expect, it } from "vitest";
import { maxDistance } from "../challenges/06";

describe("maxDistance", () => {
  it("Should return 2 for max distance to the right", () => {
    expect(maxDistance(">>*<")).toBe(2);
  });

  it("Should return 5 for all distance to the left", () => {
    expect(maxDistance("<<<<<")).toBe(5);
  });

  it("Should return 5 for max distance to the right with neutral movements", () => {
    expect(maxDistance(">***>")).toBe(5);
  });

  it("Should return 10 for all neutral movements", () => {
    expect(maxDistance("**********")).toBe(10);
  });

  it("Should return 2 for same right and left movements", () => {
    expect(maxDistance("<<**>>")).toBe(2);
  });
});
