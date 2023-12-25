import { describe, expect, it } from "vitest";
import { travelDistance } from "../challenges/25";

const dist_1 = `.....1....
..S.......
..........
....3.....
......2...`;

const dist_2 = `..S.1...`;

const dist_3 = `.....2....
..S.......
..........
....1.....
......3...`;

const dist_4 = `3....1....
..S.......
.........2
..........
......4...`;

const dist_5 = `S1`;

const dist_6 = `1....S`;

const dist_7 = `S12....3`;

describe("travelDistance", () => {
  it("Should return 12 as the total distance", () => {
    expect(travelDistance(dist_1)).toBe(12);
  });

  it("Should return 2 as the total distance", () => {
    expect(travelDistance(dist_2)).toBe(2);
  });

  it("Should return 13 as the total distance", () => {
    expect(travelDistance(dist_3)).toBe(13);
  });

  it("Should return 31 as the total distance", () => {
    expect(travelDistance(dist_4)).toBe(31);
  });

  it("Should return 1 as the total distance", () => {
    expect(travelDistance(dist_5)).toBe(1);
  });

  it("Should return 5 as the total distance", () => {
    expect(travelDistance(dist_6)).toBe(5);
  });

  it("Should return 7 as the total distance", () => {
    expect(travelDistance(dist_7)).toBe(7);
  });
});
