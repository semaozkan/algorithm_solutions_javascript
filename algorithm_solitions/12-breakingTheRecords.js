function breakingRecords(scores) {
  // Write your code here

  let highestScore = scores[0];
  let lowestScore = scores[0];
  let highestCount = 0;
  let lowestCount = 0;

  for (let i = 1; scores.length > i; i++) {
    if (scores[i] > highestScore) {
      highestCount += 1;
      highestScore = scores[i];
    }
    if (scores[i] < lowestScore) {
      lowestCount += 1;
      lowestScore = scores[i];
    }
  }

  return [highestCount, lowestCount];
}
