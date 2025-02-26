function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const applePositions = apples.map((apple) => apple + a);

  const orangePosition = oranges.map((orange) => orange + b);

  const appleCount = applePositions.filter((apple) => apple >= s && apple <= t);

  const orangeCount = orangePosition.filter(
    (orange) => orange >= s && orange <= t
  );

  console.log(appleCount.length);
  console.log(orangeCount.length);
}
