const facturas = [
    {codigo:10,importe:1500,items:[500,1000]},
    {codigo:12,importe:2500,items:[500,1000]},
    {codigo:1,importe:7500,items:[500,1000,6000]},
    {codigo:18,importe:8500,items:[500,8000,6000]},
    {codigo:19,importe:3500,items:[500,8000,6000]},
]

// consignas:

// 1 - listar facturas - OK
// 2 - ordenar por codigo en un nuevo arreglo - OK
// 3 - ordenar por importe en un nuevo arreglo - OK
// 4 - suma de importes
// 5 - nueva lista importes mayores a 7000
// 6 - suma de importe con facturas mayores a 7000
// 7 - bonus: lista de facturas con diferencia
//     (entre importe y suma de items)

facturas.forEach(factura => console.log(factura));
const lista = [...facturas];
const lista2 = [...facturas];
function comparar_codigo(a,b) {
    if (a.codigo < b.codigo){
        return -1;
    }
    if (a.codigo > b.codigo){
        return 1;
    }
    return 0;
}

function comparar_importe(a,b) {
    if (a.importe < b.importe){
        return -1;
    }
    if (a.importe > b.importe){
        return 1;
    }
    return 0;
}

/*
function compare_lname( a, b )
  {
  if ( a.lname.toLowerCase() < b.lname.toLowerCase()){
    return -1;
  }
  if ( a.lname.toLowerCase() > b.lname.toLowerCase()){
    return 1;
  }
  return 0;
}
*/

const nuevaLista = lista.sort(comparar_codigo);
nuevaLista.forEach(factura => console.log(factura));
const nuevaLista2 = lista2.sort(comparar_importe);
nuevaLista2.forEach(factura => console.log(factura));
//students.sort(compare_lname);