const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["pablo","manu","pedro","martin"],
        matematicas: ["mariana","manu","dalto","jose","martin"],
        programacion: ["silvia","manu","pedro","dalto","jose","martin"],
        gimnacio: ["paolo","pedro","jose","martin"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = obtenerInformacion(materia)[0][0];
    alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    document.write(`la materia es: ${informacion[1]}, y su profesor es: ${profesor},<br>
    y  los alumnos presentes son : ${alumnos}<br><br>`);
}
}

mostrarInformacion("fisica");
mostrarInformacion("matematicas");
mostrarInformacion("programacion");
mostrarInformacion("gimnacio");

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let cursando = [];
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            cursando.push(" "+ info);
        }
    }
    return `${alumno} esta en ${cantidadTotal} clases.<br>
    y esta cursando: ${cursando}<br><br> `;
}

document.write(cantidadDeClases("manu"));