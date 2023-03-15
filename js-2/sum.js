function sum(numList) {
  let result = 0;
  if (numList.length === 0) {
    return result;
  }
  for (let i = 0; i <= numList.length - 1; i++) {
    result = result + numList[i];
  }
  return result;
}
console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));