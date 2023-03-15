function maxIndex(numList) {
  let maxNum = 0;
  let index = -1;
  if (numList.length === 0) {
    return index;
  }
  for (let i = 0; i <= numList.length - 1; i++) {
    if (numList[i] > maxNum) {
      maxNum = numList[i];
      index = i;
    }
  }
  return index;
}
console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));