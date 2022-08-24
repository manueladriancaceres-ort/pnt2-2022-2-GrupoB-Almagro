console.log("Programación Funcional")

/* 
Programación funcional: tratar de mantener el estado de las variables principales.
Pedimos lo que necesitamos
evitar mutar
*/ 

const numeros = [23,8,14,-21,33,-15,18,5]
numeros.forEach(numero => console.log(numero))

// Devuelve una nueva lista (evitando el for)
const numPos = numeros.filter(numero => numero > 0)
console.log(numPos)
const numNeg = numeros.filter(numero => numero < 0)
console.log(numNeg)

// Sumar positivos y negativos (evitando el for)
console.log(numPos.reduce( (acumulador, numero) => acumulador + numero, 0 ))
console.log(numNeg.reduce( (acumulador, numero) => acumulador + numero, 0 ))

/* modific al mismo objeto
const otraLista = numeros
otraLista[0]  = 'un cambio'
console.log(numeros);
*/

// Esto hace que al modificar clonLista, la lista numero no se vea afectada
const clonLista = [...numeros]
//clonLista[0] = 'era un clon'
//console.log(numeros);
//console.log(clonLista);

// Ordenar una lista
const listaOrdenada = clonLista.sort((a,b) => a - b) // de esta forma se ordena de menor a mayor la lista
console.log(listaOrdenada);

