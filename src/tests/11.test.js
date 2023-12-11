import { describe, expect, it } from "vitest";
import { getIndexsForPalindrome } from "../challenges/11";

describe("getIndexsForPalindrome", () => {
  it("Should return an empty array when the word is a palindrome", () => {
    expect(getIndexsForPalindrome("anna")).toStrictEqual([]);
  });

  it("Should return index 0 and 1 to become a palindrome", () => {
    expect(getIndexsForPalindrome("abab")).toStrictEqual([0, 1]);
  });

  it("Should return null when word cannot become a palindrome", () => {
    expect(getIndexsForPalindrome("abac")).toStrictEqual(null);
  });

  it("Should return empty array when entire word has the same letter", () => {
    expect(getIndexsForPalindrome("aaaaaaaa")).toStrictEqual([]);
  });

  it("Should return index 1 and 3 to become a palindrome", () => {
    expect(getIndexsForPalindrome("aaababa")).toStrictEqual([1, 3]);
  });

  it("Should return index 4 and 8 to become a palindrome", () => {
    expect(getIndexsForPalindrome("rotaratov")).toStrictEqual([4, 8]);
  });
});
