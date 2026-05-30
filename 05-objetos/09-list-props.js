const punto = {
  x: 10,
  y: 15,
  dibujar: function () {
    console.log("Dibujando...");
  },
};

//delete punto.dibujar;
if ("dibujar" in punto) {
  punto.dibujar();
}

//let keys = Object.keys(punto);//Esto es lo mismo que lo que esta en el console.log
//console.log(Object.keys(punto));
for (let llave of Object.keys(punto)) {
  console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
  console.log(entry);
}

for (let llave in punto) {
  //esta funcionalidad es relativamente nueva y hace lo mismo que el
  // primer ciclo for mostrado mas arriba
  console.log(llave, punto[llave]);
}
