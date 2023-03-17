let receta = {};
receta.nombre = "sandwich";
receta.ingredientes = [];
receta.ingredientes.push({ nombre: "pan", cantidad: 2 });
receta.ingredientes.push({ nombre: "queso", cantidad: 1 });
console.log(receta.ingredientes[0].nombre);
let total = 0;
for (let i = 0; i <= receta.ingredientes.length - 1; i++) {
  total = total + receta.ingredientes[i].cantidad;
}
console.log(total);
