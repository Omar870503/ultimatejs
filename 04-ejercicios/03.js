/*
indice validar que no sea menor a cero y que el elemento exista en el array
*/

function getbyIdx(array, idx) {
  if (idx < 0 || idx >= array.length) {
    return "Elemento no existe";
  }
  return array[idx];
}

let resultado = getbyIdx([1, 2, 3, 4, 5], 0);
console.log(resultado);
