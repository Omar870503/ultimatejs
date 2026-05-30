//Las funciones son objetos y son objetos de primera clase
function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name); // esto significa que tienen propiedades como los objetos
console.log(Usuario.length);

const U = Usuario; //Puedes ser asignadas a otras variables o constantes
let user = new U("Omar");

console.log(user);

function of(Fn, arg) {
  //Pueden ser pasadas como argumentos a otras funciones
  return new Fn(arg);
}
let user1 = of(Usuario, "Javier");
console.log(user1);

function returned() {
  //Pueden ser retornadas
  return function () {
    console.log("Hola Mundo!");
  };
}

let saludo = returned();
saludo();
