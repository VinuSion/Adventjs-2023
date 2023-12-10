export function adjustLights(lights) {
  let o1 = 0;
  let o2 = 0;
  let index = 0;

  for (const light of lights) {
    o1 += +(light !== "🟢") * +(index % 2 !== 0);
    o2 += +(light !== "🔴") * +(index % 2 !== 0);
    o1 += +(light !== "🔴") * +(index % 2 !== 1);
    o2 += +(light !== "🟢") * +(index % 2 !== 1);
    index++;
  }
  const x = o1 - o2;

  return (x + 2 * o2 - ((x + (x >> 31)) ^ (x >> 31))) / 2;
}


//---------------------OLD SOLUTION----------------------
// function adjustLights(lights) {
//   if (lights.length <= 1) return 0;

//   let changeCount = 0;

//   for (let i = 0; i < lights.length - 1; i++) {
//     if (
//       lights[i] === lights[i + 1] &&
//       (lights[i] === "🟢" || lights[i] === "🔴")
//     ) {
//       changeCount++;
//       lights[i + 1] = lights[i] === "🟢" ? "🔴" : "🟢";
//     }
//   }

//   return changeCount;
// }
