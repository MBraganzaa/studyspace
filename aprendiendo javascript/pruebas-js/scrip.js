               // CURSO DE JAVA


                         // como mostrar una variable en pantalla

// const numero = 19;
// alert (numero);   

                         // como hacer que el usuario escriba una varibale

// let nombre = prompt ("dime tu nombre");
// alert("hola " + nombre);

                         // operadores

// nombre = 10;
// nombre /= 2;
// document.write(nombre); 

                         // concatenaciones

// nombre = "jose";
// frase = `hola ${nombre} y bienvenido al himalaya`;
// document.write(frase);

                         // arrays

// let fruta = ["manzana","banana","uvas"];
// document.write(fruta[0]);

                         // arrays de asociados;

// let pc1 = {
//     nombre: "josepc",
//     procesador: "intel core",
//     ram: "4ram",
//     espacio:"200gb"
// };

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];

// let frase = `el nombre de la pc es: ${nombre} <br> 
//             el procesador es: ${procesador} <br>
//             tiene de ram: ${ram} <br>
//             tiene un espacio de: ${espacio} <br>`;

// document.write(frase);

                         // bucles;
    //  while:
// let numero = 0;

// while(numero < 5){
//     numero++ 
//     document.write(numero);
// }

    //  do:
// do {
//     document.write(numero)
//     numero++;
// } 
//     while(numero < 2);

    //  break:
// while(numero < 20) {
//     numero++;
//     document.write(numero)
//     if (numero == 10) {break;}
// }

    //  for:
// for(let i = 0; i < 6; i++){
//     document.write(i)
// }

    //  continue:
// while(numero < 20) {
//     numero++;
//     document.write(numero)
//     if (numero == 10) {continue;}
// }

    // for in:
// let ps2 = ["memoricard","juegos","joystick"]

// for (pc in ps2){
//     document.write(pc + "<br>")
// }

    // for of:
// let ps2 = ["memoricard","juegos","joystick"]

// for (pc of ps2){
//     document.write(pc + "<br>")
// }

    // for lavel:  {esta sin completar}
// let ps2 = ["memoricard","juegos","joystick"]
// let ps3 = ["uno","dos", ps2, "tres"]

// forNuevo:
// for(let ps2 of ps3) {
//     if (ps3 == 2 ){
//         document.write(ps2 + "<br>")
//         break ;
//     }
//     else (document.write(ps2 + "<br>"))
//     }

    // funciones & return
// function nombre(){
//     alert ("nombre");
//     return 3;               
// }
// nombre = nombre();

// document.write(nombre)

    // parametros 
// function suma(num1, num2){
//     let res = num1 + num2;
//     document.write(res + "<br>") 
// }

// suma(20, 12)

    // programacion orientada a objetos
// class taza {
//     constructor(tamaño,color,capacidadDeRetencion,){
//     this.tamaño = tamaño;
//     this.color = color;
//     this.cdp = capacidadDeRetencion;
//     this.info = `la taza es de un tamaño ${tamaño} , es de un color ${color}. ¿tiene capacidad de retencion? ${capacidadDeRetencion}`;
//     }
//     verinfo(){
//         document.write(this.info)       
//     }
// }
    // herencia 
// class TazaModerna extends taza {
//     constructor(tamaño,color,capacidadDeRetencion,termica){
//         super(tamaño,color,capacidadDeRetencion);
//         this.termica = null;
//     }
//     set setTermica(newTemperatura){
//         this.termica = newTemperatura;
//     }
//     get getTermica(){
//         return this.termica;
//     }

//     tomar(){
//         document.write("gluck!");
//     }
// };

// let tazaModerna = new TazaModerna("small","black","si tiene capacidad de retencion","es termica");

// tazaModerna.verinfo()

    //setters

// tazaModerna.setTermica = "no es termica";
// document.write(tazaModerna.getTermica);

    // getters


    // metodos en cadena

// let cadena  = "cadena nasshi nasshi ";
// let cadena2 = "ahora si";
// let cadena3 = "   ES EL TIRRI EE   ";
// let cadena4 = "21"

// resultado = cadena2.padEnd(20," aeiou");
// resultado = cadena2.substring(0,5);

// resultado = cadena4.toString();
// document.write(2 + resultado);

// resultado1 = cadena3;
// document.write(resultado1.length + "<br><br>");

// resultado = cadena3.trimStart();
// document.write(resultado.length);


    // metodos en arrays

// let comida = ["tomate","papa","cebolla"];

//  document.write(comida,"<br>")

// resultado = comida.join("<br>elemento: ");

// document.write("elemento: "+resultado);


// let comida1 = ["comida","porro","carne"];
 
// comida1.unshift("horno","perejil");

// document.write(resultado + "<br>");
// document.write(comida1 + "<br>");

// let resultado = comida1.splice(3,0,"tomate");
// document.write(comida1 + "<br>");

// let resultado1 = comida1.join(" - ");
// document.write(resultado1 + "<br>");

// let resultado2 = comida1.slice(0,3);
// document.write(resultado2);

// let comida = ["papa","tomate","salame","queso"];
// let resultado = comida.filter(numero =>  numero.length > 4)
// document.write(resultado + "<br>")

            // metodos math

// let numero = Math.random() * 100;
// numero = numero.toString();
// num = numero[0] + numero[1];
// if (numero[1] == ".") {
//     num = numero[0]; 
// }   
// document.write(num);

// let numero = Math.random() * 99;
// numero = Math.round(numero);

// document.write(numero);     
// "esto es lo mismo que lo de arriba"

// let numero = Math.random() * 99;
// numero = Math.trunc(numero);

// document.write(numero)

            //selection de elementos

let titulo = document.querySelector(".titulo");

titulo.style.color = "red"
titulo.style.backgroundColor = "#333"
titulo.style.padding = "2rem";
titulo.style.fontSize = "9rem";


                        //  -- pruebas ----------------------------




// let items = {
//     nivea :"crema facial nivea",
//     avon :"crema facial avon",
//     natura :"crema facial natura",
//     dav :"crema facial dav"
// };

// let nivea = items["nivea"];
// let avon = items["avon"];
// let natura = items["natura"];
// let dav = items["dav"];

// lorem1 = `en los productos mas vendidos este 2022 encontramos en primer lugar a la crema ${nivea} dejando grandes avances en este ultimo año. <br> 
//           en el segundo puesto encotramos a ${avon} con su gran bebyface logro dar vuelta el mundo. en el tercer puesto nos encontramos a ${natura}. <br> 
//           y como ultimo ${dav} dejando lugar para año nuevo <br>`; 

// document.write(lorem1); 


// let eat = ["manzana","pera","banana"];

// document.write(eat[2]," chupa tu mama");

// let numero1 = 5;
// let numero2 = 6;
// let numero3 = 7;
// let numero4 = 11;

// let resultado = numero1 <= numero3 &  numero2 < --numero4;

// document.write(resultado);

// let nav = {
//     home : "home",
//     about : "about",
//     contact : "contact"
// };

// let home = nav["home"];
// let about = nav["about"];
// let contact = nav["contact"];

// frase = `${home} ${about} ${contact}`;

// document.write(frase);

// let numero = 22;

// while(numero < 30){
//     if (numero == 24) { break;}
//     document.write(numero + "<br>")
//     numero++
// }

// let arrays = ["manzana","mortadela","tostado"];

// for (produc of arrays){
//     document.write(produc + "<br>")
// };

// for (i = 0; i < 10; i++) {
//     if (i == 5) { continue;}
//     document.write(i);
//   }

// let numero = 0;

// do {
//     document.write(numero)
//     numero++;
// } 
// while(numero < 5); 

// ---------------------------------------------------------
