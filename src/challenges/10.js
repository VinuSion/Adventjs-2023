function createChristmasTree(ornaments, height) {
  if (height === 0) return "|";

  let tree = "";
  let ornPosition = 0;
  let ornLength = 1;

  for (let i = 1; i <= height; i++) {
    tree += " ".repeat(height - i);
    let j = 1;
    while (j <= ornLength) {
      if (j % 2 === 0) {
        tree += " ";
      } else {
        tree += ornaments[ornPosition];
        ornPosition === ornaments.length - 1
          ? (ornPosition = 0)
          : ornPosition++;
      }
      j++;
    }
    tree += "\n";
    ornLength += 2;
  }

  return tree + " ".repeat(height - 1) + "|\n";
}
