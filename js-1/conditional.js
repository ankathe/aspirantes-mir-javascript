function calcularColor(num) {
    var color;
    if (num === 1) {
      color = "black";
    } else if(num === 2) {
      color = "white";
    } else if (num === 3) {
      color = "red";
    } else {
      color = "green";
    }
  
    return "El color es " + color;
  }
  
  // código de prueba
  console.log(calcularColor(1)) // "El color es negro"
  console.log(calcularColor(2)) // "El color es blanco"
  console.log(calcularColor(3)) // "El color es azul"
  console.log(calcularColor(8)) // "El color es verde"