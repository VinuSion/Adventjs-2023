import { describe, expect, it } from "vitest";
import { manufacture } from "../challenges/02";

describe("manufacture", () => {
  it("Should return 'tren' and 'oso' that make 'tronesa'", () => {
    expect(manufacture(["tren", "oso", "pelota"], "tronesa")).toStrictEqual([
      "tren",
      "oso",
    ]);
  });

  it("Shouldshow return empty array when no gifts match 'ocmuñalb'", () => {
    expect(manufacture(["coche", "muñeca", "balon"], "ocmuñalb")).toStrictEqual(
      []
    );
  });

  it("Should return empty array when no gifts match 'nopor'", () => {
    expect(manufacture(["patineta", "robot", "libro"], "nopor")).toStrictEqual(
      []
    );
  });

  it("Should return empty array when empty gifts array is sent", () => {
    expect(manufacture([], "letras")).toStrictEqual([]);
  });
});
