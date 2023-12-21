export function distributeGifts(weights) {
  let dist = [];
  for (let i = 0; i < weights.length; i++) {
    dist[i] = [];
    for (let j = 0; j < weights[i].length; j++) {
      let neighbors = 0;
      let avgSum = 0;
      // Center
      if (weights[i][j] !== null) {
        avgSum += weights[i][j];
        neighbors++;
      }
      // Top
      if (i !== 0 && weights[i - 1][j] !== null) {
        avgSum += weights[i - 1][j];
        neighbors++;
      }
      // Bottom
      if (i !== weights.length - 1 && weights[i + 1][j] !== null) {
        avgSum += weights[i + 1][j];
        neighbors++;
      }
      // Left
      if (j !== 0 && weights[i][j - 1] !== null) {
        avgSum += weights[i][j - 1];
        neighbors++;
      }
      // Right
      if (j !== weights[i].length - 1 && weights[i][j + 1] !== null) {
        avgSum += weights[i][j + 1];
        neighbors++;
      }

      dist[i][j] = neighbors !== 0 ? Math.round(avgSum / neighbors) : 0;
    }
  }

  return dist;
}