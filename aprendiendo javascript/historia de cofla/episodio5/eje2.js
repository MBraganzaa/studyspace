let trabajo = "230 min de trabajo";
let homework = "100 min de homework";
let tp = "130 min de tp";
let estudios = "100 min de estudios";
let descanso = "10 min de descanso";


console.log("tareas");
for (var i = 0; i < 14; i++){
if (i == 0){console.group("semana 1")}
else if (i == 7){
    console.groupEnd();
    console.group("semana2");
}
    console.group("dia " + (i+1))
    console.log(trabajo);
    console.log(descanso);
    console.log(tp);
    console.log(estudios);
    console.log(homework);
    console.groupEnd();
}