function join(list) {
  let result = "";
  if (list.length === 0) {
    return result;
  }
  for (let i = 0; i <= list.length - 1; i++) {
    result = result + " " + list[i];
  }
  return result;
}
console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));