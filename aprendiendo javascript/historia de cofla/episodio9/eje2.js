alumnos = [
    {
        nombre : "lucas dalto",
        email : "lucasdalto@gmail.com",
        materia : "fisica"
    },
    {
        nombre : "manuel braganza",
        email : "manuel@gmail.com",
        materia : "matematica 2"
    },
    {
        nombre : "lau ferri",
        email : "ferri@gmail.com",
        materia : "quantica 2"
    },
    {
        nombre : "marti amaya",
        email : "amaya@gmail.com",
        materia : "gimnacio"
    },
    {
        nombre : "tobias fabra",
        email : "fabra@gmail.com",
        materia : "ingles 3"
    }
];
let boton = document.querySelector(".boton");


for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlcode =
     `  <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select name="" class="select-elegida">
                <option value="1">semana 1</option>
                <option value="2">semana 2</option>
            </select>
        </div>`;
    document.querySelector(".div-grid").innerHTML+= htmlcode;
};

boton.addEventListener("click",()=>{
    let confirmar = confirm("estas seguro que queres confirmar");
    if (confirmar){
        document.body.removeChild(boton);
        let sem = "semana  ";
        let elementos = document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".select-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = sem + semanaElegida[elemento].value;
    }
    }
})