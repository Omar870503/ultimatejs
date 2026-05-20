//short-circuit

//falso o falsy
//false
//0
//''
//null
//undefined
//NaN
let nombre = "Omar";
let username = nombre || 'Desconocido';
console.log(username); 

function fn1()
{
    console.log("soy funcion 1");
    return false;
}
function fn2()
{
    console.log("soy funcion 2");
    return true;
}

let x = fn1() && fn2(); // ambas funciones se ejecutan
console.log(x);