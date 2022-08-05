class Celular {
    constructor (color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encender = false;
    }
    botonDeEncender (){
        if (this.encender == false){
            alert("encendiendo el celular")
            this.encender = true
        } else {
            alert("apagando el celular")
            this.encender = false;
        }
    }
    reiniciar (){
        if (this.encender == true){
            alert("reiniciando el celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    sacarFoto (){
        if (this.encender == true){
            alert(`sacando una foto con una calidad : ${this.resolucionDePantalla}`);
        } else {
            alert("el celular esta apagado");
        }
    }
    grabarVideo (){
        if (this.encender == true){
            alert(`grabando un video con una calidad de : ${this.resolucionDeCamara}`);
        } else {
            alert("el celular esta apagado");
        }
    }
    mostrarInfo (){
        return `
        color : <b>${this.color}</b><br>
        peso : <b>${this.peso}</b><br>
        resolucion de pantalla : <b>${this.resolucionDePantalla}</b><br>
        resolucion de camara : <b>${this.resolucionDeCamara}</b><br>
        memoria ram : <b>${this.ram}</b><br>
        `;
    } 
}

class MovileAlta extends Celular {
    constructor(color,peso,rdp,rdc,ram,rdce){
    super(color,peso,rdp,rdc,ram);
    this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("grabando video en modo lento");
    }
    reconocimientoFacial(){
        alert("reconocimiento facial ACTIVADO acerquese a la pantalla");
    }
    infoAltaGama(){
        return `${this.mostrarInfo()} resolucion de camara Extra : ${this.resolucionDeCamaraExtra} <br>`;
    }
}


celular1 = new MovileAlta ("rojo","150g","5.5'","hd","1GB","4k");
celular2 = new MovileAlta ("gray","155g","5'","full hd","2GB","hd");
celular3 = new MovileAlta ("black","140g","5.4'","full hd","4GB","full hd");

// celular1.botonDeEncender()
// celular1.sacarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.botonDeEncender();

document.write(`
${celular1.infoAltaGama()}</br>
${celular2.infoAltaGama()}</br>
${celular3.infoAltaGama()}</br>
`);