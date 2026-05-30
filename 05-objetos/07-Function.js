function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando...");
  };
}
let punto = { z: 7 };
//Punto.call(punto, 1, 2);//El metodo call sirve para llamar funciones y pasar sus propiedades a los objetos, esto sirve para extender objetos
Punto.apply(punto, [1, 2]); //El metodo apply hace lo mismo que el metodo call pero sus argumentos hay que pasarselos en un array
console.log(punto);
/*
const Point = new Function(
  "x",
  "y",
  `
    this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando...");}
  `,
);

const p = new Point(1, 2);
console.log(p);
*/
