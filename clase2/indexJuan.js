//programacion imperativa
console.log("Hola Mundo");
const miObjeto = {
    codigo: 100,
    descripcion: 'silla'
}

console.log(miObjeto);

function calcular (a,b){
    return a + b;
}

console.log(calcular(100,200));

const unaVar = function(){
    return 1000;
}

console.log(unaVar());

//arrow function
//funcion flecha (parecido a expresiones lambda java)
//
//Se saca la palabra function y en lo posible la palabra return
//function calcular (a,b){
//    return a + b;
//}
const calcularAF = (a,b) => a+b;
console.log(calcularAF(35,45));

