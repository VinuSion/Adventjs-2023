export function revealSabotage(store) {
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      let sabotages = 0;

      if (store[i][j] !== "*") {
        if (j !== 0 && store[i][j - 1] === "*") sabotages++;
        if (j !== store[i].length - 1 && store[i][j + 1] === "*") sabotages++;

        if (i !== 0) {
          if (store[i - 1][j] === "*") sabotages++;
          if (j !== 0 && store[i - 1][j - 1] === "*") sabotages++;
          if (j !== store[i].length - 1 && store[i - 1][j + 1] === "*")
            sabotages++;
        }

        if (i !== store.length - 1) {
          if (store[i + 1][j] === "*") sabotages++;
          if (j !== 0 && store[i + 1][j - 1] === "*") sabotages++;
          if (j !== store[i].length - 1 && store[i + 1][j + 1] === "*")
            sabotages++;
        }

        store[i][j] = sabotages !== 0 ? String(sabotages) : " ";
      }
    }
  }
  return store;
}