let user = {//objeto
    id:1,
    name:"Omar",
    age: 30,
};
//for in se utiliza para recorrer las propiedades de un objeto

for(let prop in user){
    // console.log(prop);
    // console.log(user[prop]);
    console.log(prop, user[prop]);
}

let animales = ["perro", "gato", "conejo", "hamster"];

for(let indice in animales){
    console.log(indice, animales[indice]);
}
//para acceder a los valores de un array es mejor usar for of, pero for in 
// tambien funciona, aunque no es lo recomendado