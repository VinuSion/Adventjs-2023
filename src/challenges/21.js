export function findBalancedSegment(message) {
  const zeros = [0];
  const ones = [0];
  for (const bit of message) {
    zeros.push(zeros.slice(-1)[0] + +(bit === 0));
    ones.push(ones.slice(-1)[0] + +(bit === 1));
  }
  const ans = [];
  let max = 0;
  for (let i = 0; i < ones.length; i++) {
    for (let j = i + 1; j < ones.length; j++) {
      if (ones[j] - ones[i] === zeros[j] - zeros[i]) {
        if (ones[j] - ones[i] > max) {
          ans[0] = i;
          ans[1] = j - 1;
          max = ones[j] - ones[i];
        }
      }
    }
  }
  return ans;
}
