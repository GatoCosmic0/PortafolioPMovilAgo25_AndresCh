// EJEMPLO PARA SIMULAR UN CRUD

interface Estudiante{
    id:number;
    nombre: string;
}

// CREAMOS UN ARREGLO VACIO
let estudiantes:Estudiante[]=[];

// FUNCION PARA CREAR ESTUDIANTES
function crear_estudiante(alumno:Estudiante):void{
    estudiantes.push(alumno);
    console.log(`Alumno ${alumno.nombre} creado`);  // `` PARA CONCATENAR EN EL MISMO TEXTO VARIABLES 
}

// MOSTRAR LA LISTA DE ESTUDIANTES
function mostrar_estudiantes():void{
    console.log("Listado de estudiantes:",estudiantes)
}

// ACTUALIZAR UN ESTUDIANTE
function actualizar_estudiante(id:number,nuevoNombre:string):void{
    const estudiante=estudiantes.find(alumno=>alumno.id===id);
    if(estudiante){
        estudiante.nombre=nuevoNombre
        console.log("estudiante actualizado")
    }else{
        console.log("estudiante no encontrado")
    }
}

// ELIMINAR ESTUDIANTE
function eliminar_estudiante(id:number):void{
    estudiantes=estudiantes.filter(alumno=>alumno.id!==id)
    console.log("estudiante eliminado")
}

// IMPLEMENTAR LA FUNCION
crear_estudiante(
    {id:1,nombre:"Mario"}
)
crear_estudiante(
    {id:2,nombre:"Robert Charñs"}
)
mostrar_estudiantes();

// EDITAR 
actualizar_estudiante(1,"Seija")

// ELIMINAR
eliminar_estudiante(2)
mostrar_estudiantes();