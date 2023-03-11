function suma (num) {
    let resultado = 0
    for(let i=1; i<=num; i++){ 
        resultado = resultado + i
    }
    return resultado; 
}  

console.log(suma(4));
console.log(suma(10)); 
console.log(suma(15));