export function getStaircasePaths(steps, maxJump) {
  const paths = [];
  const path = [];
  const calculatePaths = (steps, maxJump, path) => {
    if (steps === 0) {
      paths.push(path);
      return;
    }

    const minSteps = [maxJump, steps][+(steps < maxJump)];

    for (let i = 1; i <= minSteps; i++) {
      calculatePaths(steps - i, maxJump, [...path, i]);
    }
  };

  calculatePaths(steps, maxJump, path);

  return paths;
}