export function compile(code) {
  let count = 0;
  let rtnPoint = null;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "¿" && count <= 0) {
      i = code.search(/[?]/);
    }

    switch (code[i]) {
      case "+":
        count += 1;
        break;
      case "-":
        count -= 1;
        break;
      case "*":
        count *= 2;
        break;
      case "%":
        rtnPoint = i;
        break;
      case "<":
        i = rtnPoint !== null ? rtnPoint : i;
        rtnPoint = null;
        break;
    }
  }

  return count;
}