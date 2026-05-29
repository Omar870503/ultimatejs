/*
Crear un algoritmo que devuelva un array de objetos en base a pares 
*/

let pares = [
  [1, { nombre: "Omar" }],
  [2, { nombre: "Valerie" }],
  [3, { nombre: "Javier" }],
  [4, { nombre: "Joaquin" }],
];

/* Esto es lo que se espera como resultado
let array = [
    {id: 1, nombre: "Omar"},
    {id: 2, nombre: "Valerie"},
    {id: 3, nombre: "Javier"},
    {id: 4, nombre: "Joaquin"},
];
*/
function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}

let resultado = toCollection(pares);
console.log(resultado);
