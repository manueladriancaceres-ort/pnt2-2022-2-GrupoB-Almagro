const facturas = [
    { codigo: 10, importe: 1500, items: [500, 1000] },
    { codigo: 12, importe: 2500, items: [500, 1000] },
    { codigo: 1, importe: 7500, items: [500, 1000, 6000] },
    { codigo: 18, importe: 8500, items: [500, 8000, 6000] },
    { codigo: 19, importe: 3500, items: [500, 8000, 6000] },
]


// 1 - listar facturas (forEach)
// 2 - ordenar por código (sort)
// 3 - ordenar por importe (sort)
// 4 - suma de importes (reduce)
// 5 - nueva lista importes mayores a 7000
// 6 - suma de importes con facturas mayores a 7000
// 7 - bonus: lista de facturas con diferencia (entre importe y suma de items)

// 1
facturas.forEach(factura => console.log(factura));

// 2
const ordenadoXCodigo = facturas.sort((a, b) => a.codigo - b.codigo);
console.log(ordenadoXCodigo)

// 3
const ordenadoXImporte = facturas.sort((a, b) => a.importe - b.importe);
console.log(ordenadoXImporte);

// 4
let sumaImportes = facturas.reduce((suma, numero) => suma + numero.importe, 0);
console.log(sumaImportes);

// 5
let mayoresA7000 = facturas.filter(numero => numero.importe > 7000);
console.log(mayoresA7000);

// 6
console.log(mayoresA7000.reduce((suma, numero) => suma + numero.importe, 0));

// 7 
const listaAux = [...facturas];
function diferenciaEntre(listaAuxiliar) {
    for (let i = 0; i < listaAuxiliar.length; i++) {
        let variable = listaAuxiliar[i].items.reduce((suma, numero) => suma + numero, 0);
        let diferenciaImporte = listaAuxiliar[i].importe - variable;
        listaAuxiliar[i].diferencia = diferenciaImporte;
    }
    return listaAuxiliar;
}

console.log(diferenciaEntre(listaAux));