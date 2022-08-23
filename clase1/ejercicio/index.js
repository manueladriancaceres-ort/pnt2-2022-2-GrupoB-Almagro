console.log("Hola mundo");

console.log("Luciano");
let nombre = "Luciano";
console.log("Augusto");

var miVariable = "hola";

console.log("Carolina");
var num=1;
console.log("Nicolas");

// declaren una variable
// var

var numero = 10;
// var numero = false;

console.log(numero);

// para evitar este problema
// usamos let
// esto da error porque ya se inicializó
// let numero = "texto";

// para string se puede usar 
// comilla simple o doble

let palabra = `Nuevo texto ${numero}`

console.log(palabra);

// una lista

let lista = [12,30,true,"algo"];

console.log(lista);

lista = 100;

console.log(lista);

// para evitar este problema
const otraLista = [23,45,-23,15,-12];

// otraLista = false; // esto da error

// consigna sumar negativos y positivos
const totales = [0,0];
for (let i = 0; i < otraLista.length; i++) {
    const element = otraLista[i];
    console.log(`indice ${i} valor ${element}`);    
    if(element < 0) {
        totales[0] = totales[0]  + element;
    } else {
        totales[1] = totales[1]  + element;
    }
}

console.log(`Totales negativos ${totales[0]}`);
console.log(`Totales positivos ${totales[1]}`);

console.log(`Esto es extraño, para el que viene de java ${totales[5]}`);

















