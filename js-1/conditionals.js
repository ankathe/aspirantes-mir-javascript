function calculateColor(num) {
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
console.log(calculateColor(1));
console.log(calculateColor(2)); 
console.log(calculateColor(3)); 
console.log(calculateColor(8)); 
