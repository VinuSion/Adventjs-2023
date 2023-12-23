export function organizeChristmasDinner(dishes) {
  const repIng = {};

  for (let i = 0; i < dishes.length; i++) {
    for (let j = 1; j < dishes[i].length; j++) {
      const ing = dishes[i][j];
      if (repIng.hasOwnProperty(String(ing))) {
        repIng[ing].push(dishes[i][0]);
        repIng[ing].sort();
      } else {
        repIng[ing] = [];
        repIng[ing].push(dishes[i][0]);
      }
    }
  }

  return Object.entries(repIng)
    .filter(([_, value]) => value.length > 1)
    .map(([key, value]) => [key, ...value])
    .sort();
}