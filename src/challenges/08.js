export function organizeGifts(gifts) {
  if (!gifts) return "";

  let warehouse = "";
  let numGifts = "";

  gifts.split("").forEach((letter) => {
    if (/[0-9]/.test(letter)) {
      numGifts += letter;
    } else {
      let num = Number(numGifts);
      if (num !== 0) {
        while (num > 0) {
          if (num >= 50) {
            warehouse += `[${letter}]`;
            num -= 50;
          } else if (num >= 10 && num < 50) {
            warehouse += `{${letter}}`;
            num -= 10;
          } else if (num < 10) {
            warehouse += `(${letter.repeat(num)})`;
            num -= num;
          }
        }
      }
      numGifts = "";
    }
  });

  return warehouse;
}
