export function calculateTime(deliveries) {
  let totalSeconds = 0;

  deliveries.forEach((time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    totalSeconds += hours * 3600 + minutes * 60 + seconds;
  });

  const remainingSeconds = totalSeconds - 7 * 3600;
  const sign = remainingSeconds < 0 ? "-" : "";
  const resultHours = String(
    Math.floor(Math.abs(remainingSeconds) / 3600)
  ).padStart(2, "0");
  const resultMinutes = String(
    Math.floor((Math.abs(remainingSeconds) % 3600) / 60)
  ).padStart(2, "0");
  const resultSeconds = String(Math.abs(remainingSeconds) % 60).padStart(
    2,
    "0"
  );

  return `${sign}${resultHours}:${resultMinutes}:${resultSeconds}`;
}
