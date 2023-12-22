import { describe, expect, it } from "vitest";
import { compile } from "../challenges/22";

describe("compile", () => {
  it("Should return 3", () => {
    expect(compile("++*-")).toBe(3);
  });

  it("Should return 3 with conditional", () => {
    expect(compile("++¿+?")).toBe(3);
  });

  it("Should return 0 skipping the conditional", () => {
    expect(compile("-+¿+?")).toBe(0);
  });

  it("Should return 3 with conditional subtracting one", () => {
    expect(compile("++*¿-?")).toBe(3);
  });

  it("Should return 6 with valid return", () => {
    expect(compile("++%++<")).toBe(6);
  });

  it("Should return 16 with valid return and conditional", () => {
    expect(compile("++%++<++¿*?")).toBe(16);
  });

  it("Should return 5 with multiple conditionals", () => {
    expect(compile("++¿+?¿+?¿+?")).toBe(5);
  });

  it("Should return -2 with skipping conditionals", () => {
    expect(compile("--¿+++?")).toBe(-2);
  });

  it("Should return -1 with skipping some conditionals", () => {
    expect(compile("--¿+++?+++¿--?")).toBe(-1);
  });

  it("Should return 7 with multiple valid returns", () => {
    expect(compile("<%+¿++%++<?")).toBe(7);
  });

  it("Should return 7 with some valid returns", () => {
    expect(compile("<%+¿++%++<?")).toBe(7);
  });

  it("Should return 2 with all invalid returns", () => {
    expect(compile("<<<<<<+<<<<<+%")).toBe(2);
  });
});
