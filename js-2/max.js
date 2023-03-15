function max(numList) {
  let maxNum = 0;
  if (numList.length === 0) {
    return undefined;
  }
  for (let i = 0; i <= numList.length - 1; i++) {
    if (numList[i] > maxNum) {
      maxNum = numList[i];
    }
  }
  return maxNum;
}
console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));