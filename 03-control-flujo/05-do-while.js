let i = 0;
do {
    if (i % 2 === 0) {
        console.log("Numero par: " +i);
    }
    i++;
}while(i<10);

// en el ciclo do while, el bloque de codigo se ejecuta al menos una vez, incluso si la condicion es falsa, esto se debe a que la condicion se evalua al final del ciclo, 
// en cambio en el ciclo while, la condicion se evalua al inicio del ciclo, por lo tanto, si la condicion es falsa, el bloque de codigo no se ejecuta.