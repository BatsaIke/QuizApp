function parseMonthDayToFullDate(monthDay) {
    const [month, day] = monthDay.split('-').map(Number);
    const year = new Date().getFullYear(); // or use a default year if appropriate
    return new Date(year, month - 1, day);
  }

  module.exports = parseMonthDayToFullDate 