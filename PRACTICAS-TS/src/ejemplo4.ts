// INTERFACES

interface arreglos{
    id:number;
    nombre:string;
    precio:number;
}

const articulos:arreglos[]=[
    {id:1, nombre:"Girasol", precio:120},
    {id:2, nombre:"Girasol", precio:500},
    {id:3, nombre:"Rosas", precio:200}
];

//METODO PARA CALCULAR EL TOTAL DE PRECIOS

function calcular_total(flores:arreglos[]):number{
    return flores.reduce((total, f)=>total+f.precio,0);
}

console.log("Total de venta de arreglos", calcular_total(articulos))