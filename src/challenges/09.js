function adjustLights(lights) {
  if (lights.length <= 1) return 0;

  let changeCount = 0;

  for (let i = 0; i < lights.length - 1; i++) {
    if (
      lights[i] === lights[i + 1] &&
      (lights[i] === "🟢" || lights[i] === "🔴")
    ) {
      changeCount++;
      lights[i + 1] = lights[i] === "🟢" ? "🔴" : "🟢";
    }
  }

  return changeCount;
}
