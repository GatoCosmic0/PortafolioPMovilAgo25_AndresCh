// FUNCIONES CON INTERFACES
// DEFINIENDO LA ESTRUCTURA DEL OBJETO

interface Estudiante{
    id:number;
    nombre:string;
    becado:boolean;
}

// CREAR EL ARREGLO DE ESTUDIANTES
const estudiantes:Estudiante[]=[
    {id:1, nombre:"Fernando",becado:false},
    {id:2, nombre:"Alexis",becado:true},
    {id:3, nombre:"Maria",becado:true}
]

// CREAR LA FUNCION PARA BUSCAR ESTUDIANTES BECADOS
function buscar_becados(lista:Estudiante[]):Estudiante[]{
    return lista.filter(lista=>lista.becado)
}

// UTILIZA LA FUNCION PARA MOSTRAR LA LISTA DE BECADOS
console.log(buscar_becados(estudiantes))