// CONSUMINR API
interface Frase{
    id:number;
    descripcion:string;
    autor:string
}

// CUANDO USAMOS async NECESITAMOS PONER Promise Y UN await
async function obtener_frases(): Promise<Frase[]>{
    const respuesta=await fetch("https://dummyjson.com/quotes");
    if(!respuesta.ok){
        throw new Error("Error en la petición de daots")
    }
    const datos:Frase[]=await respuesta.json();
    // VERIFICAMOS QUE SOLO SE OBTENGAN LAS FRASES DE LA API
    if(Array.isArray((datos as any).quotes)){
        return (datos as any).quotes as Frase[]
    }
    throw new Error ("Formato incorrecto de la api")
}

// slice ES PARA DELIMITIR LOS DATOS, NECESITA UN PARAMETRO DE INICIO Y FIN
obtener_frases().then(frases=>{
    console.log(frases.slice(0,10));
});