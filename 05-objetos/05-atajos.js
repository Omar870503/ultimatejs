let obj = {}; // Una forma de crear un constructor de objetos
let obj2 = new Object(); // Otra forma de crear un constructor de objetos

/*
*new Array(); []
*new String(); "" '' ``
new Number(): 12
new Boolean(); true o false
*/

function Usuario() {
  this.name = "Omar Arias";
}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);
console.log(eval(s1), eval(s2));
console.log(s2.valueOf());
