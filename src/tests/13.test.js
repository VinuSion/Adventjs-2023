import { describe, expect, it } from "vitest";
import { calculateTime } from '../challenges/13';

describe("calculateTime", () => {
  it("Should return -02:20:00 when theres a lot of remaining time", () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe("-02:20:00");
  });

  it("Should return -00:30:00 when theres little remaining time", () => {
    expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toBe("-00:30:00");
  });

  it("Should return 00:30:00 when its over 7 hours", () => {
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe("00:30:00");
  });

  it("Should return 00:00:00 when theres exactly no time left", () => {
    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe("00:00:00");
  });

  it("Should return 05:02:01 when theres a varying amount of time", () => {
    expect(calculateTime(['01:01:01', '09:59:59', '01:01:01'])).toBe("05:02:01");
  });

  it("Should return -00:00:01 when theres exactly one second left", () => {
    expect(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    ).toBe("-00:00:01");
  });
})