let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue;//salta a la siguiente iteracion del ciclo, no ejecuta el codigo que esta debajo de esta linea
    }
    if (i === 4) {
        break;//termina el ciclo, no ejecuta el codigo que esta debajo de esta linea
    }
    console.log("Numero: " + i);
}

//esto se puede utilizar para los ciclos for, for in, for of, while, do while, etc.