const numeros = [35,45,89,36,85,52]

numeros.forEach(numero => console.log(numero));

const numeroMayores = numeros.filter(numero => numero > 50)
console.log(numeroMayores);

console.log(numeroMayores.reduce((sum, numero) => sum + numero, 0));

const clonLista = [...numeros]
clonLista[0] = 'un cambio'
console.log(clonLista);
console.log(numeros);

const listaOrdenada = clonLista.sort((a,b) => a - b);
console.log(listaOrdenada);