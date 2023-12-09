export function findNaughtyStep(original, modified) {
  const minLength = Math.min(original.length, modified.length);

  for (let i = 0; i < minLength; i++) {
    if (original[i] !== modified[i]) {
      return original.length < modified.length ? modified[i] : original[i];
    }
  }

  if (original.length < modified.length) {
    return modified[minLength];
  } else if (original.length > modified.length) {
    return original[minLength];
  }

  return "";
}
