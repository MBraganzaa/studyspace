// class Celular {
//     constructor (color,peso,rdp,rdc,ram){
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.ram = ram;
//         this.encender = false;
//     }
//     botonDeEncender (){
//         if (this.encender == false){
//             alert("encendiendo el celular")
//             this.encender = true
//         } else {
//             alert("apagando el celular")
//             this.encender = false;
//         }
//     }
//     reiniciar (){
//         if (this.encender == true){
//             alert("reiniciando el celular");
//         } else {
//             alert("el celular esta apagado");
//         }
//     }
//     sacarFoto (){
//         if (this.encender == true){
//             alert(`sacando una foto con una calidad : ${this.resolucionDePantalla}`);
//         } else {
//             alert("el celular esta apagado");
//         }
//     }
//     grabarVideo (){
//         if (this.encender == true){
//             alert(`grabando un video con una calidad de : ${this.resolucionDeCamara}`);
//         } else {
//             alert("el celular esta apagado");
//         }
//     }
//     mostrarInfo (){
//         return `
//         color : <b>${this.color}</b><br>
//         peso : <b>${this.peso}</b><br>
//         resolucion de pantalla : <b>${this.resolucionDePantalla}</b><br>
//         resolucion de camara : <b>${this.resolucionDeCamara}</b><br>
//         memoria ram : <b>${this.ram}</b><br>
//         `;
//     } 
// }

// class MovileAlta extends Celular {
//     constructor(color,peso,rdp,rdc,ram,rdce){
//     super(color,peso,rdp,rdc,ram);
//     this.resolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("grabando video en modo lento");
//     }
//     reconocimientoFacial(){
//         alert("reconocimiento facial ACTIVADO acerquese a la pantalla");
//     }
//     infoAltaGama(){
//         return `${this.mostrarInfo()} resolucion de camara Extra : ${this.resolucionDeCamaraExtra} <br>`;
//     }
// }


// celular1 = new MovileAlta ("rojo","150g","5.5'","hd","1GB","4k");
// celular2 = new MovileAlta ("gray","155g","5'","full hd","2GB","hd");
// celular3 = new MovileAlta ("black","140g","5.4'","full hd","4GB","full hd");

// // celular1.botonDeEncender()
// // celular1.sacarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();
// // celular1.botonDeEncender();

// document.write(`
// ${celular1.infoAltaGama()}</br>
// ${celular2.infoAltaGama()}</br>
// ${celular3.infoAltaGama()}</br>
// `);

class celular {
    constructor(pulgadas,tamaño,memoriaram,memoriaexterna,camara){
        this.pulgadas = pulgadas;
        this.tamaño = tamaño;
        this.memoriaram = memoriaram;
        this.memoriaexterna = memoriaexterna;
        this.camara = camara;
        this.encerder = false;
    }
    botonEncender(){
        if (this.encerder == false){
            alert("encendiendo el celular");
            this.encerder = true; 
        } 
    } 
    botonApagar(){
        if (this.encerder == true){
            alert("apagando el celular");
            this.encerder = false; 
        }
    }
    mostrarData(){
        return `
        tamaño : ${this.tamaño}. <br>
        pulgadas : ${this.pulgadas}. <br>
        memoria ram : ${this.memoriaram}. <br>
        memoria externa : ${this.memoriaexterna}. <br>
        camara : ${this.camara}. <br>`
    }
    sacarFoto(){
        if (this.encerder == true){
            alert("sacando una foto de calidad.");
        } else {
            alert("el celular estaria apagado");
        }
    }
}

// let celular1 = new celular ("5 de alto y 3 de ancho","6 pulgadas","8 ram","128 gb","pro");

// celular1.botonEncender();
// celular1.sacarFoto();
// celular1.botonApagar();
// document.write(`
//     ${celular1.mostrarData()}
// `)

class altaGama extends celular {
    constructor(pulgadas,tamaño,memoriaram,memoriaexterna,camara,camaradelantera,color,modelo){
        super(pulgadas,tamaño,memoriaram,memoriaexterna,camara);
        this.camaradelantera = camaradelantera;
        this.color = color;
        this.modelo = modelo;
    }
    mostrarDataAltaGama(){
        return `${this.mostrarData()}
        camara delantera : ${this.camaradelantera}. <br> 
        color : ${this.color}. <br>
        modelo : ${this.modelo}. <br>`
    }
}
// let celular1 = new altaGama ("5 de alto y 3 de ancho","6 pulgadas","8 ram","128 gb","pro","medium","gold","iphone 14 pro");
// document.write(`${celular1.mostrarDataAltaGama()}`)

class altagama2 extends altaGama {
    constructor(pulgadas,tamaño,memoriaram,memoriaexterna,camara,camaradelantera,color,modelo,bateria,precio){
        super(pulgadas,tamaño,memoriaram,memoriaexterna,camara,camaradelantera,color,modelo);
        this.bateria = bateria;
        this.precio = precio;
    }
    mostrarDataAltaGama2(){
        return `${this.mostrarDataAltaGama()}
        bateria : ${this.bateria}. <br>
        precio : ${this.precio}. <br>`;
    }
}

let celular2 = new altagama2 ("6 pulgadas","5 de alto x 3 de ancho","8 ram","128 gb","pro","media pro","gold","sansung A70","13000 amperios","120.000$");
document.write(`${celular2.mostrarDataAltaGama2()}`);