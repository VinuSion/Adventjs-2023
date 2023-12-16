import { describe, expect, it } from "vitest";
import { transformTree } from "../challenges/16";

describe("transformTree", () => {
  it("Should return null when attempting to transform empty array", () => {
    expect(transformTree([])).toStrictEqual(null);
  });

  it("Should return base root node with no children when attempting to transform array with just one element", () => {
    expect(transformTree([1])).toStrictEqual({
      value: 1,
      left: null,
      right: null,
    });
  });

  it("Should return a binary tree with only 2 children when attempting to transform array with 3 elements", () => {
    expect(transformTree([1, 2, 3])).toStrictEqual({
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    });
  });

  it("Should return a binary tree with partial nested children when some elements are null in the array", () => {
    expect(transformTree([17, 0, null, null, 1])).toStrictEqual({
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      right: null,
    });
  });

  it("Should return a binary tree with mostly missing children when most elements are null in the array", () => {
    expect(
      transformTree([
        2,
        7,
        5,
        null,
        6,
        null,
        9,
        null,
        null,
        1,
        11,
        null,
        null,
        null,
        10,
      ])
    ).toStrictEqual({
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    });
  });
});
