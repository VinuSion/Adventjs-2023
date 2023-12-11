export function getIndexsForPalindrome(word) {
  let ans = null;
  const wordLength = word.length;

  if ([...word].reverse().join("") === word) {
    ans = [];
  } else {
    for (let i = 0; i < wordLength; i++) {
      for (let j = i + 1; j < wordLength; j++) {
        const wordArr = [...word];
        const temp = wordArr[i];
        wordArr[i] = wordArr[j];
        wordArr[j] = temp;
        if (wordArr.join("") === wordArr.reverse().join("")) {
          ans = [i, j];
          break;
        }
      }
      if (ans !== null) break;
    }
  }

  return ans;
}
