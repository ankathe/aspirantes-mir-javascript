let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};
console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
for (let llave in pedro) {
  console.log(llave + " : " + pedro[llave]);
}
pedro.saluda = function () {
  return "hola me llamo " + this.nombre;
};
console.log(pedro.saluda());