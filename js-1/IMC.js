function bmi (peso, altura) {
    const resultado = (peso/(altura * altura));
    return "bmi =" + resultado; 
}  

console.log(bmi(65, 1.62));
console.log(bmi(75, 1.70));
console.log(bmi(55, 1.65));