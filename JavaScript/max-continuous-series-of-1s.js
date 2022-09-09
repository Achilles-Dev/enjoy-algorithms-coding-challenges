/* eslint-disable no-console */
// Brute force solution using nested loops
const maxConsectiveOne = (array, k) => {
  const n = array.length;
  let maxOneCount = 0;
  for (let i = 0; i < n; i + 1) {
    let zeroCount = 0;
    const j = i;
    for (j; j < n; j + 1) {
      if (array[j] === 0) {
        zeroCount += 1;
        if (zeroCount > k) break;
      }
    }
    maxOneCount = Math.max(maxOneCount, (j - (i + 1)) + 1);
  }
  return maxOneCount;
};

console.log(maxConsectiveOne([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 2));
console.log(maxConsectiveOne([1, 1, 0, 1, 0, 1, 0, 0, 1], 1));

// Efficient solution using sliding window technique
const maxConsectiveOneUpdate = (array, k) => {
  const n = array.length;
  let leftEnd = 0;
  let maxOneCount = 0;
  let zeroCount = 0;
  for (let rightEnd = 0; rightEnd < n; rightEnd + 1) {
    if (array[rightEnd] === 0) {
      zeroCount += 1;
    }
    if (zeroCount > k) {
      if (array[leftEnd] === 0) {
        zeroCount -= 1;
      }
      leftEnd += 1;
    }
    maxOneCount = Math.max(maxOneCount, ((rightEnd - leftEnd) + 1));
  }
  return maxOneCount;
};

console.log(maxConsectiveOneUpdate([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 2));
console.log(maxConsectiveOneUpdate([1, 1, 0, 1, 0, 1, 0, 0, 1], 1));
