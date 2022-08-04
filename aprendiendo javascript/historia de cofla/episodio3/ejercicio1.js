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
}

celular1 = new Celular ("rojo","150g","5.5'","hd","1GB");
celular2 = new Celular ("gray","155g","5'","full hd","2GB");
celular3 = new Celular ("black","140g","5.4'","full hd","4GB");

celular1.botonDeEncender()
celular1.sacarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.botonDeEncender();