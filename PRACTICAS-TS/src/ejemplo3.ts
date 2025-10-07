// FUNCIONES TIPADAS

function escribir_texto(textito:string, cantidad:number):string[]{
    const resultado:string[]=[]
    for(let i=0; i<cantidad; i++){
        resultado.push(textito);
    }
    return resultado;
}

console.log(escribir_texto("Bienvenidos",10));