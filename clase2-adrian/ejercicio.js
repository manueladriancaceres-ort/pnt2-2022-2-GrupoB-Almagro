const facturas = [
    {codigo:10,importe:1500,items:[500,1000]},
    {codigo:12,importe:2500,items:[500,1000]},
    {codigo:1,importe:7500,items:[500,1000,6000]},
    {codigo:18,importe:8500,items:[500,8000,6000]},
    {codigo:19,importe:3500,items:[500,8000,6000]},
]

facturas.forEach(e => console.log(e));
console.log([...facturas].sort((a,b) => a.codigo-b.codigo));
console.log([...facturas].sort((a,b) => a.importe-b.importe));
console.log(facturas.reduce((sum,f) => sum + f.importe, 0));
console.log([...facturas].filter(f => f.importe > 7000));
console.log([...facturas].filter(f => f.importe > 7000)
        .reduce((sum,f) => sum + f.importe,0) );
console.log([...facturas].filter(f => f.importe != 
    f.items.reduce((sum,item) => sum + item, 0 ) ));        
// consignas:

// 1 - listar facturas
// 2 - ordenar codigo en un nuevo arreglo
// 3 - ordenar por importe en un nuevo arreglo
// 4 - suma de importes
// 5 - nueva lista importes mayores a 7000
// 6 - suma de importe con facturas mayores a 7000
// 7 - bonus: lista de facturas con diferencia
//     (entre importe y suma de items)