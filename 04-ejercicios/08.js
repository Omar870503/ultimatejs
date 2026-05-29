/*
Crear un algoritmo que tome un array de objetos y devuelva un array de pares clave-valor, donde cada par representa una propiedad y su valor correspondiente en el objeto original.
*/

let array = [
  {
    id: 1,
    nombre: "Omar",
  },
  {
    id: 2,
    nombre: "Valerie",
  },
  {
    id: 3,
    nombre: "Javier",
  },
  {
    id: 4,
    nombre: "Joaquin",
  },
];
/* esto es lo que se espera como resultado
let pares = [
  [1, { id: 1, nombre: "Omar" }],
  [2, { id: 2, nombre: "Valerie" }],
  [3, { id: 3, nombre: "Javier" }],
  [4, { id: 4, nombre: "Joaquin" }],
];
*/
function toPairs(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
