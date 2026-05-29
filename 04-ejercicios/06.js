/*
Crear un algoritmo que devuelva la cantidad de numeros positivos de un array, 
utilizando un ciclo for of
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function contarPositivos(arr) {
  let contador = 0;
  for (numero of arr) {
    if (numero > 0) {
      contador++;
    }
  }
  return contador;
}
let resultado = contarPositivos(array);
console.log(resultado);
