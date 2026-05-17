// Personaje de TV
let nombre = "Tanjirou Kamado";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjirou Kamado",
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 17;

let llave = "edad";
personaje[llave] = 18;

delete personaje.anime;

console.log(personaje);