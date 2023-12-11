import { describe, expect, it } from "vitest";
import { adjustLights } from "../challenges/09";

describe("adjustLights", () => {
  it("Should return 1 light to adjust '🔴'", () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toBe(1);
  });

  it("Should return 2 lights to adjust '🔴, 🟢'", () => {
    expect(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])).toBe(2);
  });

  it("Should return 0 lights to adjust when all of them are alternating", () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])).toBe(0);
  });

  it("Should return 1 light to adjust '🔴'", () => {
    expect(adjustLights(["🔴", "🔴", "🔴"])).toBe(1);
  });
});
