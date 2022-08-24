const facturas = [
    { codigo: 10, importe: 1500, items: [500, 1000] },
    { codigo: 12, importe: 2500, items: [500, 1000] },
    { codigo: 1, importe: 7500, items: [500, 1000, 6000] },
    { codigo: 18, importe: 8500, items: [500, 8000, 6000] },
    { codigo: 19, importe: 3500, items: [500, 8000, 6000] },

]

// CONSIGNAS:
// 1 - Listar Facturas
// 2 - Ordenar por codigo en nuevo arreglo
// 3 - Ordenar por importe en nuevo arreglo
// 4 - Suma de importes
// 5 - Nueva lista importes mayores a 7000
// 6 - Suma de importes con facturas mayores a 7000
// 7 - Bonus: Lista de facturas con diferencia (entre importe y suma de items)

//1)
facturas.forEach(factura => console.log(factura))

//2)
const facturasPorCodigo = facturas.sort((a,b) => a.codigo - b.codigo)
console.log(facturasPorCodigo);

//3)
const facturasPorImporte = facturas.sort((a,b) => a.importe - b.importe)
console.log(facturasPorImporte);

//4)
const sumaImportes = console.log(facturas.reduce( (acumulador, numero) => acumulador + numero.importe, 0 ))

//5)
const mayoresA7000 = facturas.filter(numero => numero.importe > 7000)
console.log(mayoresA7000);

//6)
const sumaImportesMayores = mayoresA7000.reduce( (acumulador, numero) => acumulador + numero.importe, 0 )
console.log(sumaImportesMayores);

//7) 
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