const dates = [
  'Oct 7, 2009',
  'Nov 10, 2009',
  'Jan 10, 2009',
  'Oct 22, 2009',
];
//mapping each month to numeric value
const monthMap = {
  'Jan': '01',
  'Feb': '02',
  'Mar': '03',
  'Apr': '04',
  'May': '05',
  'Jun': '06',
  'Jul': '07',
  'Aug': '08',
  'Sep': '09',
  'Oct': '10',
  'Nov': '11',
  'Dec': '12',
};

const dateObjects = dates.map(date => {
  const [match, month, day, year] = date.match(/([a-zA-Z]+) (\d+), (\d+)/);
  return {
    original: date,
    formatted: `${year}-${monthMap[month]}-${day.length === 1 ? `0`: ``}${day}`
  }
});

// Sorts the dates chronologically.
dateObjects.sort((a, b) => a.formatted.localeCompare(b.formatted));

console.log(dateObjects.map(date => date.original));