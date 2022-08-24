/*// 1 - listar facturas
// 2 - ordenar x codigo en un nuevo arreglo
// 3 - ordenar por importe en un nuevo arreglo
// 4 - suma de importes
// 5 - nueva lista importes mayores a 7000
// 6 - suma de importe con facturas mayores a 7000
// 7 - bonus: lista de facturas con diferencia
//     (entre importe y suma de items)*/

const facturas = [
    {codigo:10,importe:1500,items:[500,1000]},
    {codigo:12,importe:2500,items:[500,1000]},
    {codigo:1,importe:7500,items:[500,1000,6000]},
    {codigo:18,importe:8500,items:[500,8000,6000]},
    {codigo:19,importe:3500,items:[500,8000,6000]},
]
//1
facturas.forEach(factura=> console.log(factura));
//2
//const ordenadaXCod = facturas.sort((a, b) => a - b);
const clon1 =[...facturas];
const facturasOrdenadasCodigo = clon1.sort(({codigo: codA},{codigo:codB}) => codA - codB)
console.log(facturasOrdenadasCodigo);
//3
const clon2 =[...facturas];
const facturasOrdenadasImporte = clon2.sort(({importe:impA},{importe:impB})=> impA-impB)
console.log(facturasOrdenadasImporte);
//4
console.log(facturas.reduce((acumulador,{importe:imp})=> acumulador+imp,0));

//5
const lista = facturas.filter({importe:v}>7000)
console.log(lista);



