import { describe, expect, it } from "vitest";
import { organizeChristmasDinner } from "../challenges/23";

describe("organizeChristmasDinner", () => {
  it("Should return 2 repeating ingredients among all dishes", () => {
    expect(
      organizeChristmasDinner([
        ["christmas turkey", "turkey", "sauce", "herbs"],
        ["cake", "flour", "sugar", "egg"],
        ["hot chocolate", "chocolate", "milk", "sugar"],
        ["pizza", "sauce", "tomato", "cheese", "ham"],
      ])
    ).toStrictEqual([
      ["sauce", "christmas turkey", "pizza"],
      ["sugar", "cake", "hot chocolate"],
    ]);
  });

  it("Should return 2 repeating ingredients among all dishes and one common dish", () => {
    expect(
      organizeChristmasDinner([
        ["fruit salad", "apple", "banana", "orange"],
        ["berry smoothie", "blueberry", "banana", "milk"],
        ["apple pie", "apple", "sugar", "flour"],
      ])
    ).toStrictEqual([
      ["apple", "apple pie", "fruit salad"],
      ["banana", "berry smoothie", "fruit salad"],
    ]);
  });

  it("Should return 2 repeating ingredients among all dishes", () => {
    expect(
      organizeChristmasDinner([
        ["gingerbread", "flour", "ginger", "sugar"],
        ["glazed ham", "ham", "honey", "sugar", "vinegar"],
        ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
        ["vegetable soup", "carrot", "potato", "onion", "garlic"],
        ["fruit punch", "apple juice", "orange juice", "sugar"],
      ])
    ).toStrictEqual([
      ["garlic", "roast chicken", "vegetable soup"],
      ["sugar", "fruit punch", "gingerbread", "glazed ham"],
    ]);
  });

  it("Should return 4 repeating ingredients among all dishes", () => {
    expect(
      organizeChristmasDinner([
        ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
        ["mashed potatoes", "potatoes", "butter", "milk"],
        ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
        ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"],
      ])
    ).toStrictEqual([
      ["butter", "cinnamon rolls", "mashed potatoes", "turkey stuffing"],
      ["cinnamon", "cinnamon rolls", "pumpkin pie"],
      ["flour", "cinnamon rolls", "pumpkin pie"],
      ["sugar", "cinnamon rolls", "pumpkin pie"],
    ]);
  });

  it("Should return 4 repeating ingredients among all dishes and 1 popular dish", () => {
    expect(
      organizeChristmasDinner([
        ["chicken alfredo", "chicken", "pasta", "parmesan"],
        ["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
        ["pasta salad", "pasta", "olive oil", "tomato"],
        ["tomato soup", "tomato", "basil", "cream"],
      ])
    ).toStrictEqual([
      ["chicken", "chicken alfredo", "parmesan chicken"],
      ["parmesan", "chicken alfredo", "parmesan chicken"],
      ["pasta", "chicken alfredo", "pasta salad"],
      ["tomato", "pasta salad", "tomato soup"],
    ]);
  });

  it("Should return empty array when no ingredients repeat", () => {
    expect(
      organizeChristmasDinner([
        ["snowflake cookies", "flour", "sugar", "vanilla"],
        ["winter stew", "beef", "carrots", "potatoes"],
        ["holiday punch", "cranberry juice", "orange juice", "sparkling water"],
        ["festive salad", "lettuce", "cranberries", "walnuts"]
      ])
    ).toStrictEqual([]);
  });
});
