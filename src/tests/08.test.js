import { describe, expect, it } from "vitest";
import { organizeGifts } from "../challenges/08";

describe("organizeGifts", () => {
  it("Should return 1 [a] pallet, 2 {a} boxes, 6 (aaaaaa) in a bag, 1 {b} box and 1 (b) bag", () => {
    expect(organizeGifts("76a11b")).toBe("[a]{a}{a}(aaaaaa){b}(b)");
  });

  it("Should return 2 {a} boxes", () => {
    expect(organizeGifts("20a")).toBe("{a}{a}");
  });

  it("Should return 1 [b] pallet, 2 {b} boxes, 2 [a] pallets, 2 {a} boxes and 4 (cccc) in a bag", () => {
    expect(organizeGifts("70b120a4c")).toBe("[b]{b}{b}[a][a]{a}{a}(cccc)");
  });

  it("Should return 1 {d} box, 9 (ddddddddd) in a bag, 1 [e] pallet and 1 (e) in a bag", () => {
    expect(organizeGifts("19d51e")).toBe("{d}(ddddddddd)[e](e)");
  });
});
