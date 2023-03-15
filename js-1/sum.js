function plus(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result = result + i;
  }
  return result;
}
console.log(plus(4));
console.log(plus(10));
console.log(plus(15));