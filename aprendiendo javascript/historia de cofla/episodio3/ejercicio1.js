class Celular {
    costructor (color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encender = false;
        this.enc = false;
    }
    botonDeEncender (){
        if (this.enc == false){
            alert("encendiendo el celular")
            this.encender = true;
        } else {
            alert("celular apagado");
            this.encender = false;
        }
    }
    reiniciar (){
        if (this.encender == true){
            alert("reiniciando el celular");
            this.encender = false;
        } else {
            alert("el celular esta apagado");
        }
    }
    sacarFoto (){
        if (this.encender == true){
            alert(`sacando una foto con una calidad : ${rdc}`);
        } else {
            alert("el celular esta apagado");
        }
    }
    grabarVideo (){
        if (this.encender == true){
            alert(`grabando un video con una calidad de : ${rdc}`);
        } else {
            alert("el celular esta apagado");
        }
    }
}

const celular1 = new Celular ("rojo","150g","5.5","full hd","2GB");

celular1.botonDeEncender()
celular1.sacarFoto();
celular1.sacarFoto();
celular1.reiniciar();