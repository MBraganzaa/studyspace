const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["manu","pedro","dalto","jose","martin"],
        matematicas: ["manu","pedro","dalto","jose","martin"],
        programacion: ["manu","pedro","dalto","jose","martin"],
        gimnacio: ["manu","pedro","dalto","jose","martin"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia];
    } else {
        return false;
    }
}

let informacion = obtenerInformacion("fisica");

if (informacion !== false){
    document.write(`alumnos presentes en la materia ${informacion[1]} : ${informacion[0]}`);
}