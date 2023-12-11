import { describe, expect, it } from "vitest";
import { createChristmasTree } from "../challenges/10";

const tree_1 = 
`  x
 x x
x x x
  |
`;

const tree_2 = 
`   x
  o x
 o x o
x o x o
   |
`;

const tree_3 = 
`    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`;

const tree_4 = 
`  *
 @ o
* @ o
  |
`;

describe("createChristmasTree", () => {
  it("Should return a tree with a height of 3 and ornaments 'x'", () => {
    expect(createChristmasTree("x", 3)).toBe(tree_1);
  });

  it("Should return a tree with a height of 4 and ornaments 'xo'", () => {
    expect(createChristmasTree("xo", 4)).toBe(tree_2);
  });

  it("Should return a tree with a height of 5 and ornaments '123'", () => {
    expect(createChristmasTree("123", 5)).toBe(tree_3);
  });

  it("Should return a tree with a height of 3 and ornaments '*@o'", () => {
    expect(createChristmasTree("*@o", 3)).toBe(tree_4);
  });
});
