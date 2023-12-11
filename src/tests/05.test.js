import { describe, expect, it } from "vitest";
import { cyberReindeer } from "../challenges/05";

describe("cyberReindeer", () => {
  it("Should return the step-by-step path with the gates opened after the fifth step with 10 time units", () => {
    expect(cyberReindeer("S..|...|..", 10)).toStrictEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S..",
    ]);
  });

  it("Should return the step-by-step path with the gates closed with 4 time units", () => {
    expect(cyberReindeer("S.|.", 4)).toStrictEqual([
      "S.|.",
      ".S|.",
      ".S|.",
      ".S|.",
    ]);
  });

  it("Should return the step-by-step path with the gates opened after the fifth step with 7 time units", () => {
    expect(cyberReindeer("S.|.|.", 7)).toStrictEqual([
      "S.|.|.",
      ".S|.|.",
      ".S|.|.",
      ".S|.|.",
      ".S|.|.",
      "..S.*.",
      "..*S*.",
    ]);
  });

  it("Should return the step-by-step path with the gates opened after the fifth step with 6 time units", () => {
    expect(cyberReindeer("S.|..", 6)).toStrictEqual([
      "S.|..",
      ".S|..",
      ".S|..",
      ".S|..",
      ".S|..",
      "..S..",
    ]);
  });

  it("Should return the step-by-step path with the gates opened after the fifth step with 8 time units", () => {
    expect(cyberReindeer("S.|.|.|......|.||.........", 8)).toStrictEqual([
      "S.|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      "..S.*.*......*.**.........",
      "..*S*.*......*.**.........",
      "..*.S.*......*.**.........",
    ]);
  });
});
