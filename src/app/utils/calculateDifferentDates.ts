export function calculateDifferentDates(dateToSubstract: Date) {
  const actualDate = new Date();

  const substractionDate = +dateToSubstract - +actualDate;

  const seconds = Math.floor(substractionDate / 1000) % 60;
  const minutes = Math.floor(substractionDate / (1000 * 60)) % 60;
  const hours = Math.floor(substractionDate / (1000 * 60 * 60)) % 24;
  const days = Math.floor(substractionDate / (24 * 60 * 60 * 1000));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
