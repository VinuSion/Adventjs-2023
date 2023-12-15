import { describe, expect, it } from "vitest";
import { autonomousDrive } from "../challenges/15";

describe("autonomousDrive", () => {
  it("Should return initial position when moving right and left", () => {
    expect(autonomousDrive(["..!...."], ["R", "L"])).toStrictEqual(["..!...."]);
  });

  it("Should return initial position when moving up and left against warehouse boundaries", () => {
    expect(autonomousDrive(["!..", "***"], ["U", "L"])).toStrictEqual([
      "!..",
      "***",
    ]);
  });

  it("Should return bot moving down one row", () => {
    expect(
      autonomousDrive(["..!....", "......*"], ["R", "D", "L"])
    ).toStrictEqual([".......", "..!...*"]);
  });

  it("Should return bot only moving to the right side", () => {
    expect(
      autonomousDrive(["***", ".!.", "***"], ["D", "U", "R", "R", "R"])
    ).toStrictEqual(["***", "..!", "***"]);
  });

  it("Should return bot not moving to any side due to all of them being blocked", () => {
    expect(
      autonomousDrive(["***", "*!*", "***"], ["D", "U", "R", "L"])
    ).toStrictEqual(["***", "*!*", "***"]);
  });

  it("Should return bot moving only in the bottom row", () => {
    expect(
      autonomousDrive(
        [".**.*.*.", ".***....", "..!....."],
        ["D", "U", "R", "R", "R"]
      )
    ).toStrictEqual([".**.*.*.", ".***....", ".....!.."]);
  });
});
