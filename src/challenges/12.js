export function checkIsValidCopy(original, copy) {
  const ogWord = original.toLowerCase().split("");
  const copyWord = copy.split("");

  if (ogWord.length !== copyWord.length) return false;

  for (let i = 0; i < ogWord.length - 1; i++) {
    if (ogWord[i] === " " && copyWord[i] !== " ") {
      return false;
    } else {
      const regexPattern = new RegExp(`[${ogWord[i]}#+:. ]`);
      if (!regexPattern.test(copyWord[i])) return false;
    }
  }

  return true;
}
