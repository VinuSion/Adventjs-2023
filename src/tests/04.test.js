import { describe, expect, it } from "vitest";
import { decode } from "../challenges/04";

describe("decode", () => {
  it("Should return 'hola mundo' where '(odnum)' is reversed in parenthesis", () => {
    expect(decode("hola (odnum)")).toBe("hola mundo");
  });

  it("Should return 'hello world!' where '(olleh) (dlrow)' is reversed in parenthesis", () => {
    expect(decode("(olleh) (dlrow)!")).toBe("hello world!");
  });

  it("Should return 'santaclaus' where 'sa(u(cla)atn)s' is reversed inside nested parenthesis", () => {
    expect(decode("sa(u(cla)atn)s")).toBe("santaclaus");
  });

  it("Should return 'santa' where '((nta)(sa))' is reversed inside nested parenthesis", () => {
    expect(decode("((nta)(sa))")).toBe("santa");
  });
});
