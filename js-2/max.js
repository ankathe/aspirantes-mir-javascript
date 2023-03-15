function max(numList){
    let maxNum=0;
    // Si el arreglo numList esta vacio, retornar undefined
    if(numList.length===0){
        return undefined
    }
    // Se valida si el numList en i es mayor que maxNum
    // Si es mayor, se asigna un nuevo maxNum
    for(let i=0; i<= numList.length-1; i++){
        if(numList[i]>maxNum){
            maxNum=numList[i]
        }
    }

    return maxNum
}

console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));