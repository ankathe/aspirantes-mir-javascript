function sum(num) {
  let result = 0;
  if (num.length === 0) {
    return result;
  }
  for (let i = 1; i <= num; i++) {
    result = result + i;
  }
  return result;
}
console.log(sum(4));
console.log(sum(10));
console.log(sum(15));
