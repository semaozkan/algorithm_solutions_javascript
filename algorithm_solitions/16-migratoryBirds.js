function migratoryBirds(arr) {
  let maxValue = arr[0];
  let maxCount = 0;
  let count = 1;

  arr.sort((x, y) => x - y);

  for (let i = 0; arr.length > i; i++) {
    if (arr[i + 1] == arr[i]) {
      count++;
    } else {
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count;
      maxValue = arr[i];
    } else if (count == maxCount) {
      if (maxValue > arr[i]) {
        maxValue = arr[i];
      }
    }
  }

  return maxValue;
}
