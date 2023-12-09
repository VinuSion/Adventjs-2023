export function decode(message) {
  const stack = [];
  let currentWord = "";

  for (let char of message) {
    if (char === "(") {
      stack.push(currentWord);
      currentWord = "";
    } else if (char === ")") {
      currentWord = stack.pop() + currentWord.split("").reverse().join("");
    } else {
      currentWord += char;
    }
  }

  return currentWord;
}
