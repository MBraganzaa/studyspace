

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

// let cantidad = prompt(" ¿cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad ; i ++){
//     alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0]
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales [p][1]++;
//     }
// }

// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     __________presentes: ${alumnosTotales[alumno][1]} <br>
//     __________ausencias: ${30 - alumnosTotales[alumno][1]}`
//     if (30 - alumnosTotales[alumno][1] > 18){
//         resultado+= " reprobado por inasistencias<br><br>";
//     }
//     else {
//         resultado+= "<br><br>";
//     } document.write(resultado);
// }

// let cantidad = prompt("¿cuantos alumnos son?");
// alumnosTotales = [];

// for (i = 0; i < cantidad; i ++){
//     alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0];
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "P" || presencia == "p"){
//         alumnosTotales [p][1]++;
//     }
// }

// for (i = 0; i < 30; i ++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     ______presentes: ${alumnosTotales[alumno][1]}<br>
//     ______ausentes: ${30 - alumnosTotales[alumno][1]}`
//     if (30 - alumnosTotales[alumno][1] > 18){
//     resultado += "Reprobado por inasisntecias <br><br>";
//     } else {resultado += "<br><br>"}
//     document.write(resultado);
// }

// let cantidad = prompt("¿cuantos almunos son?");
// let alumnostotales = []

// for (i = 0; i < cantidad; i ++){
//     alumnostotales[i] = [prompt("nombre del alumno " + (i+1)), 0];
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P"){
//         alumnostotales [p][1]++;
//     }
// }

// for (i = 0; i < 30; i ++){
//     for (alumnos in alumnostotales){
//         tomarAsistencia(alumnostotales[alumnos][0],alumnos)
//     }
// }

// for (alumnos in alumnostotales){
//     let resultado = `${alumnostotales[alumnos][0]}:<br>
//     ___presentes: ${alumnostotales[alumnos][1]}<br>
//     ___ausentes: ${30 - alumnostotales[alumnos][1]}<br>`
//     if (30 - alumnostotales[alumnos][1] > 18){
//         resultado += `___resulatado: Desaprobado por inasistencias <br><br>`;
//     } else {resultado += `___resultado: Aprobado <br><br>`};
//     document.write(resultado);
// }


let cantidad1 = prompt("cuantos alumnos son?");
let alumnostotales1 = [];

for (i = 0; i < cantidad1; i ++){
    alumnostotales1[i] = [prompt("nombre del alumno " + (i+1)), 0]
}

const tomarasistencia1 = (nombre,p)=>{
    let presencia1 = prompt(nombre);
    if (presencia1 == "p" || presencia1 == "P"){
        alumnostotales1 [p][1]++;
    } 
}

for (i = 0; i < 30; i ++){
    for (alumnos in alumnostotales1){
        tomarasistencia1(alumnostotales1[alumnos][0],alumnos);
    }
}

for (alumnos in alumnostotales1){
    let resultado = `${alumnostotales1[alumnos][0]} :<br>
    ___asistencias : ${alumnostotales1[alumnos][1]} <br>
    ___ausentes : ${30 - alumnostotales1[alumnos][1]} <br><br>`
    if (30 - alumnostotales1[alumnos][1] > 18 ){
    resultado += `repobrado por inasistencias <br><br>`
    } document.write(resultado);
}
