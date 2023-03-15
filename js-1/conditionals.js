function calcularColor(num) {
  let color = "";

  switch (num) {
    case 1: {
      color = "black";
      break;
    }
    case 2: {
      color = "white";
      break;
    }
    case 3: {
      color = "red";
      break;
    }
    default: {
      color = "green";
      break;
    }
  }
  return "El color es " + color;
}

// código de prueba
console.log(calcularColor(1)); // "El color es negro"
console.log(calcularColor(2)); // "El color es blanco"
console.log(calcularColor(3)); // "El color es azul"
console.log(calcularColor(8)); // "El color es verde"
