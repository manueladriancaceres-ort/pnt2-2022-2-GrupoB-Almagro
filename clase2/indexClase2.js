console.log("Hola mundo");

const miObjeto = {
    codigo: 100,
    descripcion: 'silla'
}

console.log(miObjeto);

function calcular (a,b){
    return a + b;
}

console.log(calcular(100,200));

console.log("Chau");


// función anonima

const unaVariable = function(){
    return 1000;
}

// como quiero que llame a lo que devuelve la funcion le paso los () , sino devuelve todo lo que esta dentro de unaVariable
console.log(unaVariable());

//arrow function (parecido a expresiones Lambda)

// Se saca la palabra function y en lo posible la palabra return

const calcularFu = (a,b) => a+b; 

console.log(calcular(100,400));
console.log(calcular("Hola", ", como va?"))