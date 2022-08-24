console.log("Programacion funcional");
//tratar de mantener el estado de las variables principales
//evitar mutar

const numeros = [34,56,34,12,-10,-15,12];
console.log(numeros);
numeros.forEach(numero => console.log(numero));

//devuelve una nueva lista (FILTER)
const numPos = numeros.filter(numero => numero > 0);
console.log(numPos);
const numNeg = numeros.filter(numero => numero < 0);
console.log(numNeg);

//sumar positivos y negativos (REDUCE)
console.log(numPos.reduce((sum,numero) => sum+numero, 0));

/* MODIFICA AL MISMO OBJETO NUMEROS
const otraLista = numeros;
otraLista[0] = 'un cambio';
console.log(numeros);
*/
//CLONAMOS LISTA 
const clonLista = [...numeros];
clonLista[0] = 'era un clon y puedo cambiar'
console.log(clonLista);
console.log(numeros);
//ORDENAMOS LISTA COMO TEXTO
const listaOrdenada = clonLista.sort();
console.log(listaOrdenada);
//ORDENAMOS LISTA COMO NUMERO
const listaOrdenada2 = clonLista.sort((a,b) => a-b);
console.log(listaOrdenada2);