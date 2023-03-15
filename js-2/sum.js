function sum(numList){
    let result=0;
    for (let i=0; i<= numList.length-1; i++){
        // Linea se repite n veces
        result = result + numList[i];
    }

    return result
}


console.log(sum([1, 2, 3])) 
console.log(sum([10, 8, 12, 5]))
console.log(sum([]))