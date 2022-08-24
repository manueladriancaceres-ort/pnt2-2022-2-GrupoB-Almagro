// PROGRAMACIÓN IMPERATIVA
console.log("Hola mundo")

// Creación de objetos
const miObjeto = { 
    codigo: 100,
    decripción: 'silla redonda'
}

console.log(miObjeto)


// Creación de funciones
function calcular(a, b) {
    return a + b
}

console.log(calcular(2000, 22))

// Creación de función anónima
const unaVar = function() {
    return 10;
}

console.log(unaVar());

// arrow function o función flecha (parecido a expresiones landa de Java)
// Se elimina la palabra function y return (en lo posible)

const calcularFu = (a,b) => a + b
console.log(calcularFu(2,12))
