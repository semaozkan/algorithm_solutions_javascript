function dayOfProgrammer(year) {
  let daysInMonths;

  if (year === 1918) {
    daysInMonths = [31, 15, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else if (
    (year < 1918 && year % 4 == 0) ||
    (year > 1918 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)))
  ) {
    daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  let sum = 0;
  let month = 0;

  for (let i = 0; daysInMonths.length > i; i++) {
    if (sum + daysInMonths[i] <= 256) {
      sum += daysInMonths[i];
      month = i + 1;
    } else {
      month += 1;
      break;
    }
  }

  let day = 256 - sum;

  return `${day}.${month.toString().padStart(2, "0")}.${year}`;
}
