function birthday(s, d, m) {
  // Write your code here

  let count = 0;

  for (let i = 0; s.length > i; i++) {
    let sum = s.slice(i, i + m).reduce((acc, num) => acc + num, 0);
    if (sum == d) {
      count += 1;
    }
  }

  return count;
}
