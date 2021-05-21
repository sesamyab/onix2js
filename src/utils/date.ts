export function parseOnixDate(date: string) {
  const year = parseInt(date.slice(0, 4));
  const month = parseInt(date.slice(4, 6)) - 1;
  const day = parseInt(date.slice(6, 8));

  return new Date(Date.UTC(year, month, day));
}
