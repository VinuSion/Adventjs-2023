export function drawGift(size, symbol) {
  if (size === 0) return "\n";
  if (size === 1) return "#\n";

  let gift = "";
  let times = 0;
  for (let i = 1; i <= size + size - 1; i++) {
    if (i <= size) {
      let outline = "".padEnd(size + (i - 1), "#");
      if (outline.length !== size) {
        outline =
          outline.slice(0, 1) +
          (i === size ? "#".repeat(size - 2) : symbol.repeat(size - 2)) +
          "#" +
          symbol.repeat(times) +
          "#";
        times++;
      }
      gift += " ".repeat(size - i) + outline + "\n";
    } else {
      let outline = "".padEnd(size + size - i + size - 1, "#");
      if (outline.length !== size) {
        times--;
        outline =
          outline.slice(0, 1) +
          symbol.repeat(size - 2) +
          "#" +
          symbol.repeat(times - 1) +
          "#";
      }
      gift += outline + "\n";
    }
  }
  return gift;
}
