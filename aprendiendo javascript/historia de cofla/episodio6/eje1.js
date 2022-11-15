let contenedor = document.querySelector(".flex__contenedor");

function crearLlave(nombre,modelo,precio){
    img = "<img src='imagen.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>precio: <b>${precio}</b></p>`;
    return[img,nombre,modelo,precio,];
}

let documentFragment = document.createDocumentFragment();

for (let i = 1; i <=20; i++) {
    let modeloRamdom = Math.round(Math.random()*1000);
    let precioRamdom = Math.round(Math.random()*10+30); 
    let llave = crearLlave(`llave ${i}`,`modelo: ${modeloRamdom}`,precioRamdom);
    let div1 = document.createElement("DIV");
    div1.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRamdom });
    div1.tabIndex = i;
    div1.classList.add('flex-item',`item-${i}`);
    div1.innerHTML = llave[0]+ llave[1]+ llave[2]+ llave[3];
    documentFragment.appendChild(div1);
}

contenedor.appendChild(documentFragment);

