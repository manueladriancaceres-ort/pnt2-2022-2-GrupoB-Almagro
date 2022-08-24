console.log("Programacion funcional");

// criterios
// pedimos lo que necesitamos
// tratar de mantener el estado de las variables principales
// evitar mutar 

const numeros = [34,56,34,12,-10,-15,12];

numeros.forEach(numero => console.log(numero));

// devuelve una nueva lista
const numPos = numeros.filter(numero => numero > 0);
console.log(numPos);
const numNeg = numeros.filter(numero => numero < 0);
console.log(numNeg);

// sumar positivos y negativos
console.log(numPos.reduce( (acumulador,numero) => acumulador+numero,0 ));

/*  modifica al mismo objeto
const otraLista = numeros;
otraLista[0] = 'un cambio';
console.log(numeros);
*/

const clonLista = [...numeros];
//clonLista[0] = 'era un clon y puedo cambiar'
//console.log(clonLista);
//console.log(numeros);
const listaOrdenada = clonLista.sort((a,b) => a-b);
console.log(listaOrdenada);
