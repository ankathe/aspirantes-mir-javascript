function bmi(peso, altura) {
  if (peso < 0 || altura < 0) {
    return "The height or weight should not be negative";
  }
  const result = peso / (altura * altura);
  return result;
}
console.log(bmi(65, 1.62));
console.log(bmi(75, 1.7));
console.log(bmi(55, 1.65));