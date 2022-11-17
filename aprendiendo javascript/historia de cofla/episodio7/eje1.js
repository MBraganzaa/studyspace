let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let comprar = confirm(`el alto es de ${alto}, y el ancho es de ${ancho}.`);

if (comprar){
    alert("felicidades compraste la computadora");
} else {
    alert("compra cancelada");
}