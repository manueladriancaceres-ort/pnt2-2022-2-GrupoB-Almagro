const facturas = [
    {codigo: 10, importe:1500,items:[500,1000]},
    {codigo: 12, importe:2500,items:[500,1000]},
    {codigo: 1, importe:7500,items:[500,1000,6000]},
    {codigo: 18, importe:8500,items:[500,8000,6000]},
    {codigo: 19, importe:3500,items:[500,8000,6000]}
]

//consignas:
//1- Listar facturas
//2- ordenar código en un nuevo array
//3- ordenar por importe en un nuevo arreglo
//4- suma de importes
//5- nueva lista importes mayores a 7000
// 6 - suma de importe con facturas mayores a 7000
// 7 - bonus: lista de facturas con diferencia(entre importe y suma de items)

//1
facturas.forEach(factura => console.log(factura))

//2
const clonFacturas1 = [...facturas]
const facturasOrdenadasCodigo = clonFacturas1.sort(({codigo: codA},{codigo:codB}) => codA - codB)
console.log(facturasOrdenadasCodigo);

//3
const clonFacturas2 = [...facturas]
const facturasOrdenadasImporte = clonFacturas2.sort(({importe: impA},{importe:impB}) => impA - impB)
console.log(facturasOrdenadasImporte);

//4
console.log(facturas.reduce((suma,{importe:value}) => suma + value, 0));

//5
const listaFacturasMayorSieteMil = facturas.filter(value => value.importe > 7000)
console.log(listaFacturasMayorSieteMil);

//6
console.log(listaFacturasMayorSieteMil.reduce((suma,{importe:value}) => suma + value, 0));

//7
const facturasDiferenciaItems = [...facturas].filter(factura => factura.importe != factura.items.reduce((suma,value) => suma + value, 0))
console.log(facturasDiferenciaItems);