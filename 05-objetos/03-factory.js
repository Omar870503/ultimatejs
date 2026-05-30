function crearUsuario(name, email) {
  return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave...");
    },
  };
}

let user1 = crearUsuario("Omar", "omararias870503@gmail.com");
let user2 = crearUsuario("Javier", "javier180226@gmail.com");

console.log(user1, user2);
