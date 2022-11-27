const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let resultado,mensaje;
    let prevRes = parseInt(document.getElementById('nota').value);
    try {
        mensaje = enviarMensaje(prevRes);
        resultado = validarPuntaje(8,5,prevRes);

    } catch (e) {
        resultado = "¿Sos gracioso?";
        mensaje = "eh descubierto que me estas queriendo hackear";
    };
    abrirModal(resultado,mensaje);
});

const enviarMensaje = (prevRes)=>{
    let mensaje;
    switch (prevRes) {
        case 1: mensaje = "no podes ser tan hdp";
        break;
        case 2: mensaje = "casi crack";
        break;
        case 3: mensaje = "un 3 flaco re pt";
        break;
        case 4: mensaje = "no aprendiste nada";
        break;
        case 5: mensaje = "volve en diciembre";
        break;
        case 6: mensaje = "casiiii";
        break;
        case 7: mensaje = "biennn";
        break;
        case 8: mensaje = "muy bien";
        break;
        case 9: mensaje = "vos si que estudiaste";
        break;
        case 10: mensaje = "mejor imposible";
        break;
        default: mensaje = null;
    }
    return mensaje
};

const validarPuntaje = (nota1, nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio < 7){
        console.log("desaprovado");
        return resultado
    } else {
        console.log("aprobado");
        return resultado
    }
};

const abrirModal = (res,mgs)=>{
    console.log(res);
    console.log(mgs);
};