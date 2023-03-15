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
console.log(calcularColor(1));
console.log(calcularColor(2)); 
console.log(calcularColor(3)); 
console.log(calcularColor(8)); 
