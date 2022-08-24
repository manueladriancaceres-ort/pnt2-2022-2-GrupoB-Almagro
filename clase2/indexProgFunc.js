console.log("Programación funcional");


// tratar de mantener el estado de las variables principales, evitar mutar los arrays por ej.

const numeros = [34, 56, 34, 12, -10, -15, 12];

numeros.forEach(numero => console.log(numero));


function prueba(numeros){
    for (let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
    }
}

// devuelve una nueva lista
const numPos = numeros.filter(numero => numero > 0);
console.log(numPos);

const numNeg = numeros.filter(numero => numero < 0);
console.log(numNeg);

// sumar positivos y negativos
console.log(numPos.reduce( (acumulador,numero) => acumulador+numero, 0));

let sumaPos = numPos.reduce((suma, numero) => suma+numero, 0);

let sumaNeg = numNeg.reduce((neg, numero) => neg+numero, 0);

console.log(sumaPos + sumaNeg);

// modifica al mismo objeto
const otraLista = numeros;
otraLista[0] = 'un cambio';
console.log(numeros); // muestra los cambios que tuvo otraLista. Apuntan al mismo puntero

// para evitarlo usamos el operador 

const clonLista = [...numeros];
clonLista[0] = 'era un clon y puedo cambiar'
console.log(clonLista);
console.log(numeros);

const listaOrdenada = clonLista.sort((a,b) => a-b); // el sort solo ordena como string. Por eso se le pasa el a-b, si fuese b-a ordena al reves (mayor a menor)
console.log(listaOrdenada)
