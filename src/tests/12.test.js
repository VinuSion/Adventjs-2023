import { describe, expect, it } from "vitest";
import { checkIsValidCopy } from '../challenges/12';

describe("checkIsValidCopy", () => {
  it("Should return true for valid copy with degradation", () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toBe(true);
  });

  it("Should return false for invalid copy with degradation", () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')).toBe(false);
  });

  it("Should return false for invalid copy with unneccesary whitespaces around", () => {
    expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toBe(false);
  });

  it("Should return true for valid copy with heavy degradation", () => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(true);
  });

  it("Should return false for invalid copy at a strictly whitespace character", () => {
    expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toBe(false);
  });

  it("Should return true for valid copy with a mix of degradation", () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true);
  });

  it("Should return true for invalid copy at the wrong whitespace character", () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false);
  });

  it("Should return false for invalid copy with unneccesary capital letters", () => {
    expect(checkIsValidCopy('Santa Claus', 'SantA ClauS')).toBe(false);
  });

  it("Should return true for valid copy with numbers", () => {
    expect(checkIsValidCopy('3 regalos', '3 .+:# #:')).toBe(true);
  });

  it("Should return true for valid copy with full degradation", () => {
    expect(checkIsValidCopy('3 regalos', '3        ')).toBe(true);
  });

  it("Should return true for valid copy with numbers mixed with degradation", () => {
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toBe(true);
  });

  it("Should return false for invalid copy of differing string length", () => {
    expect(checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')
    ).toBe(false);
  });
})