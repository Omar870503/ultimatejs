let animales = ["perro", "gato", "conejo", "hamster"];

for (let animal of animales) {
    console.log(animal);
}
console.log("----Fin del ciclo for of----");
//como hacerlo con un ciclo while
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}
console.log("----Fin del ciclo while----");