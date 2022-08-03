

// let cantidad = prompt(" ¿cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i ++) {
//     alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0]
// };

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//     alumnosTotales [p][1]++;
//     }
// };

// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales){
//     tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// };

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     _________presentes: ${alumnosTotales[alumno][1]} <br>
//     _________Ausencias: ${30 - alumnosTotales[alumno][1]}`;
//     if (30 - alumnosTotales[alumno][1] > 18) {
//     resultado+= " reprobado por inasistencias<br><br>";
//     } else {
//     resultado+= "<br><br>";
//     }; document.write(resultado);
// };

let cantidad = prompt(" ¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad ; i ++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0]s
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales [p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    __________presentes: ${alumnosTotales[alumno][1]} <br>
    __________ausencias: ${30 - alumnosTotales[alumno][1]}`
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= " reprobado por inasistencias<br><br>";
    }
    else {
        resultado+= "<br><br>";
    } document.write(resultado);
}