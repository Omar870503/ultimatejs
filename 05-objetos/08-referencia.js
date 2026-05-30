/*
let a = {};
let b = a;

b.prop = 1;
console.log(a, b);
*/
/*
let a = 1;

function suma(n) {
  n++;
}

suma(a);
console.log(a);
*/

let a = { prop: 1 };

function suma(n) {
  n.prop++;
}

suma(a);
console.log(a);

//Resumen: los tipos de datos Primitivos se copian y
// los tipos de datos de Referencia que pueden ser (objetos, array, funciones),
//  se referencian
