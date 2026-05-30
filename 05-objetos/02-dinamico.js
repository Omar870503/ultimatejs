//Cuando defines una variable constante lo que no puedes es cambiar su valor
//ejemplo: user = 1
//pero si puedes agregar propiedades, eliminar propiedades a los objetos y los array
const user = { id: 1 };

user.name = "Omar";
user.guardar = function () {
  console.log("Guardando", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//Object.freeze se utiliza para que no se pueda cambiar sus propiedades y sus valores
//Object.seal se utiliza para que no se puedan cambiar sus propiedades pero si sus valores
const user1 = Object.freeze({ id: 2 });
user1.name = "Javier";
console.log(user1);
