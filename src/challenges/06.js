export function maxDistance(movements) {
  let right = 0;
  let left = 0;
  let neutral = 0;

  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === ">") right++;
    if (movements[i] === "<") left++;
    if (movements[i] === "*") neutral++;
  }
  return Math.abs(right - left) + neutral;
}
