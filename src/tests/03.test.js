import { describe, expect, it } from "vitest";
import { findNaughtyStep } from "../challenges/03";

describe("findNaughtyStep", () => {
  it("Should return 'e' as the different modified letter", () => {
    expect(findNaughtyStep("abcd", "abcde")).toBe("e");
  });

  it("Should return 'e' as the different original letter", () => {
    expect(findNaughtyStep("abcde", "abcd")).toBe("e");
  });

  it("Should return 'o' as the different modified letter", () => {
    expect(findNaughtyStep("xxxx", "xxoxx")).toBe("o");
  });

  it("Should return 'f' as the different original letter", () => {
    expect(findNaughtyStep("stepfor", "stepor")).toBe("f");
  });

  it("Should return empty string '' when no different letters are found", () => {
    expect(findNaughtyStep("iiiii", "iiiii")).toBe("");
  });
});
