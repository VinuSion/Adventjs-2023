export function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    [...gift].every((letter) => materials.includes(letter))
  );
}
