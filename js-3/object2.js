let persona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  profesion: "",
};
console.log(persona);
function presentacion(objeto) {
  return `Nombre: ${objeto.nombre}, Edad: ${objeto.edad}; Ciudad: ${objeto.ciudad}; profesion: ${objeto.profesion}`;
}
let mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ["leer", "cocinar", "nadar", "estudiar"];
console.log(persona.hobbies);
for (let i = 0; i <= persona.hobbies.length - 1; i++) {
  console.log(persona.hobbies[i]);
}