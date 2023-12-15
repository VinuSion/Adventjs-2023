export function autonomousDrive(store, movements) {
  const warehouse = store.map((row) => row.split(""));

  let rowIndex = 0;
  let initPosIndex = 0;

  for (let i = 0; i < warehouse.length; i++) {
    const rowCheck = warehouse[i].findIndex((mov) => mov === "!");
    if (rowCheck !== -1) {
      rowIndex = i;
      initPosIndex = rowCheck;
      break;
    }
  }

  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === "R") {
      if (
        warehouse[rowIndex][initPosIndex + 1] !== undefined &&
        warehouse[rowIndex][initPosIndex + 1] !== "*"
      ) {
        warehouse[rowIndex][initPosIndex + 1] = "!";
        warehouse[rowIndex][initPosIndex] = ".";
        initPosIndex++;
      }
    }

    if (movements[i] === "L") {
      if (
        warehouse[rowIndex][initPosIndex - 1] !== undefined &&
        warehouse[rowIndex][initPosIndex - 1] !== "*"
      ) {
        warehouse[rowIndex][initPosIndex - 1] = "!";
        warehouse[rowIndex][initPosIndex] = ".";
        initPosIndex--;
      }
    }

    if (movements[i] === "U") {
      if (
        warehouse[rowIndex - 1] !== undefined &&
        warehouse[rowIndex - 1][initPosIndex] !== "*"
      ) {
        warehouse[rowIndex - 1][initPosIndex] = "!";
        warehouse[rowIndex][initPosIndex] = ".";
        rowIndex--;
      }
    }

    if (movements[i] === "D") {
      if (
        warehouse[rowIndex + 1] !== undefined &&
        warehouse[rowIndex + 1][initPosIndex] !== "*"
      ) {
        warehouse[rowIndex + 1][initPosIndex] = "!";
        warehouse[rowIndex][initPosIndex] = ".";
        rowIndex++;
      }
    }
  }

  return warehouse.map((row) => row.join(""));
}
