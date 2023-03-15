function bmi (peso, altura) {
    if(peso <0 || altura <0){
        return "The height or weight should not be negative"
    }


    const resultado = (peso/(altura * altura));
    return resultado; 
}  

console.log(bmi(65, 1.62));
console.log(bmi(75, 1.70));
console.log(bmi(55, 1.65));