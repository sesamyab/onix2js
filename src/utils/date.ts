export function parseOnixDate(date: string) {
  const year = parseInt(date.slice(0, 4));
  const month = parseInt(date.slice(4, 6)) - 1;
  const day = parseInt(date.slice(6, 8));
  return new Date(Date.UTC(year, month, day));
}
export function parseYearMonth(date: string) {
  const year = parseInt(date.slice(0, 4));
  const month = parseInt(date.slice(4, 6)) - 1;
  return new Date(Date.UTC(year, month, 1));
}

export function parseYearWeek(date: string) {
  const year = parseInt(date.slice(0, 4));
  const week = parseInt(date.slice(4, 6)) - 1;
  return new Date(Date.UTC(year, 0, 1+(week * 7)));
}

export function parseYear(date: string) {
  const year = parseInt(date.slice(0, 4));
  return new Date(Date.UTC(year, 0, 1));
}

export function parseSeason(date: string) {
  const year = parseInt(date.slice(0, 4));
  const season = parseInt(date.slice(4, 5));
  const month = season*3-1;
  return new Date(Date.UTC(year, month, 21));
}

export function parseQuarter(date: string) {
  const year = parseInt(date.slice(0, 4));
  const season = parseInt(date.slice(4, 5));
  const month = (season-1)*3;
  return new Date(Date.UTC(year, month, 1));
}

export function parseRawOnixDate(date: string, format: string) {
  switch (format) {
    case '01':
      return parseYearMonth(date)
    case '02':
      return parseYearWeek(date)
    case '03':
      return parseYearMonth(date)
    case '04':
      return parseYearMonth(date)
    case '05':
      return parseYear(date)
    case '00':
    default:
      return parseOnixDate(date);

  }
  }
