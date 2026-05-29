/*
crear un algoritmo qeu devuelva el numero menor y mayor de un array de numeros, utilizando un ciclo for of
*/
//Este ejercicio en tipico en entrevistas tecnicas de trabajo, 
// es importante saber como resolverlo de manera eficiente, 
// ya que se puede resolver en una sola pasada por el array, 
// lo que lo hace O(n) en tiempo de complejidad, en lugar de O(n log n) 
// si se ordenara el array primero.

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return { menor, mayor };
}
let resultado = getMenorMayor(array);
console.log(resultado);
