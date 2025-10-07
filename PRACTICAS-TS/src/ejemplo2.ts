// USO DE ARREGLOS

const calificaciones:number[] = [9, 7, 6, 8, 10];


function obtener_promedio(calif:number[]):number{
    let suma:number=0;
    for(let n of calif){
        suma += n;
    }
    return suma/calif.length;
}

console.log(obtener_promedio(calificaciones));