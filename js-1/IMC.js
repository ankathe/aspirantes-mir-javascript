function bmi(peso, altura) {
  if (peso <= 0 || altura <=0) {
    return 0;
  }
  return peso / (altura * altura);
}
console.log(bmi(65, 1.62));
console.log(bmi(75, 1.7));
console.log(bmi(55, 1.65));