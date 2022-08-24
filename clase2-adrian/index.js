// programacion imperativa

console.log("Hola mundo");

const miObjeto = {
    codigo: 100,
    descripcion: 'silla'
}

console.log(miObjeto);

function calcular(a,b) {
    return a + b;
} 

console.log(calcular(100,200));

// funcion anonima
const unaVarFu = function() {
    return 1000;
}

console.log(unaVarFu());

//
// arrow function
// funcion flecha  (parecido a expresiones lambda java)
//

// Se saca la palabra funtion
// en lo posible la palabra return

const calcularFu = (a,b) => a+b;
console.log(calcularFu("hola ", "si"));



