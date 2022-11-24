const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn__enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = "solicitud enviada correcatmente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

let validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 6){
        error[0] = true;
        error[1] = "el nombre tiene que tener como minimo 6 caracteres";
        return error;
    } else if (nombre.value.length > 30){
        error[0] = true;
        error[1] = "el nombre no puede contener mas de 30 caracteres"
        return error;
    } else if (email.value.length < 6  ||
            email.value.length > 30 ||
            email.value.indexOf("@") == -1 ||
            email.value.indexOf(".") == -1 ){
            error[0] = true;
            error[1] = "se necesita un email valido";
            return error;
    } else if (materia.value.length < 4 || materia.value.length > 30){
        error[0] = true;
        error[1] = "materia invalida";
        return error;
    }
    
    error[0] = false;
    return error;
}

