// class calculadora {
//     constructor(){}
//     sumar(){
//         let num1 = prompt("escriba el primer numero");
//         let num2 = prompt("escriba el segundo numero");
//         return parseInt(num1) + parseInt(num2);
//     }
//     restar(){
//         let num1 = prompt("escriba el primer numero");
//         let num2 = prompt("escriba el segundo numero");
//         return parseInt(num1) - parseInt(num2);
//     }
//     multiplicar(){
//         let num1 = prompt("escriba el primer numero");
//         let num2 = prompt("escriba el segundo numero");
//         return parseInt(num1) * parseInt(num2);
//     }
//     dividir(){
//         let num1 = prompt("escriba el primer numero");
//         let num2 = prompt("escriba el segundo numero");
//         return parseInt(num1) / parseInt(num2);
//     }
//     exponenciar(){
//         let num1 = prompt("escriba el primer numero");
//         let exp = prompt("escriba el exponenciador");
//         return parseInt(num1) ** parseInt(exp);
//     }
// }
// let ope = new calculadora ()

// alert("ponga el numero de la opracion que desea realizar");
// let operacion = prompt("1 : sumar, 2 : restar, 3 : multiplicar , 4 : dividir, 5 : exponenciar.");

// if (operacion == 1){
//     let resultado = ope.sumar();
//     alert(resultado);
// }
// else if (operacion == 2){  
//     let resultado = ope.restar();
//     alert(resultado);
// }
// else if (operacion == 3){
//     let resultado = ope.multiplicar();
//     alert(resultado);
// }
// else if (operacion == 4){
//     let resultado = ope.dividir();
//     alert(resultado);
// }
// else if (operacion == 5){
//     let resultado = ope.exponenciar();
//     alert(resultado);
// } else {alert("error")}

// class calculadora {
//     constructor(){}
//     sumar(){
//         let num1 = prompt("escriba el primer numero")
//         let num2 = prompt("escriba el segundo numero")
//         let resultado = parseInt(num1) + parseInt(num2);
//         alert(resultado);
//     }
//     restar(){
//         let num1 = prompt("escriba el primer numero")
//         let num2 = prompt("escriba el segundo numero")
//         let resultado = parseInt(num1) - parseInt(num2);
//         alert(resultado);
//     }
//     multiplicar(){
//         let num1 = prompt("escriba el primer numero")
//         let num2 = prompt("escriba el segundo numero")
//         let resultado = parseInt(num1) * parseInt(num2);
//         alert(resultado);
//     }
//     dividir(){
//         let num1 = prompt("escriba el primer numero")
//         let num2 = prompt("escriba el segundo numero")
//         let resultado = parseInt(num1) / parseInt(num2);
//         alert(resultado);
//     }
//     exponenciar(){
//         let num1 = prompt("escriba el primer numero")
//         let num2 = prompt("escriba el exponenciador")
//         let resultado = parseInt(num1) ** parseInt(num2);
//         alert(resultado);
//     }
// }
// let op = new calculadora();

// alert("elija la operacion a realizar");
// let operacion = prompt("1 : sumar, 2 : restar, 3 : exponenciar, 4 : dividir, 5 : exponenciar");

// if (operacion == 1){
//     op.sumar();
// }
// else if (operacion == 2){
//     op.restar();
// }
// else if (operacion == 3){
//     op.multiplicar();
// }
// else if (operacion == 4){
//     op.dividir();
// }
// else if (operacion == 5){
//     op.exponenciar();
// } 
// else{ alert("error") };

class calculadora {
    constructor(){}
    sumar(){
        let num1 = prompt("escriba el primer numero");
        let num2 = prompt("escriba el segundo numero");
        let resultado = parseInt(num1) + parseInt(num2);
        alert(resultado);
    }
    restar(){
        let num1 = prompt("escriba el primer numero");
        let num2 = prompt("escriba el segundo numero");
        let resultado = parseInt(num1) - parseInt(num2);
        alert(resultado);
    }
    dividir(){
        let num1 = prompt("escriba el primer numero");
        let num2 = prompt("escriba el segundo numero");
        let resultado = parseInt(num1) / parseInt(num2);
        alert(resultado);
    }
    multiplicar(){
        let num1 = prompt("escriba el primer numero");
        let num2 = prompt("escriba el segundo numero");
        let resultado = parseInt(num1) * parseInt(num2);
        alert(resultado);
    }
    exponenciar(){
        let num1 = prompt("escriba el primer numero");
        let num2 = prompt("escriba el exponenciador");
        let resultado = parseInt(num1) ** parseInt(num2);
        alert(resultado);
    }
    raizCuadrada(){
        let num1 = prompt("escriba el numero para la raiz cuadrada");
        let resultado = Math.sqrt(num1);
        alert(resultado);
    }
    raizCubica(){
        let num1 = prompt("escriba el numero para la raiz cubica");
        let resultado = Math.cbrt(num1);
        alert(resultado);
    }
}
let calc = new calculadora();

alert("elija la operacion a efectuar");
let operacion = prompt("1 : sumar, 2 : restar, 3 : dividir, 4 : multiplicar, 5 : exponenciar, 6 : raiz cuadrada, 7 : raiz cubica.");

if (operacion == 1){
    calc.sumar();
}
else if (operacion == 2){
    calc.restar();
}
else if (operacion == 3){
    calc.dividir();
}
else if (operacion == 4){
    calc.multiplicar();
}
else if (operacion == 5){
    calc.exponenciar();
}
else if (operacion == 6){
    calc.raizCuadrada();
}
else if (operacion == 7){
    calc.raizCubica();
}
else {
    alert("error");
}