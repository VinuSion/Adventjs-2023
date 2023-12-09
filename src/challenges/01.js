export function findFirstRepeated(gifts) {
  let indices = {};

  for (let i = 0; i < gifts.length; i++) {
    const value = gifts[i];

    if (indices[value] !== undefined) {
      return value;
    }

    indices[value] = i;
  }

  return -1;
}
