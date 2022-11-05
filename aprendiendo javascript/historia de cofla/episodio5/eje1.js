const materias = {
    	fisica: [90,7,7,"fisica"],    
    	matematicas: [55,9,5,"matematicas"],    
    	sociales: [88,4,2,"sociales"],    
    	quimica: [65,4,8,"quimica"],    
    	programcion: [96,8,4,"programacion"],    
    	habilidadesComunicativas: [75,9,6,"HC"],    
    	gimnasio: [80,4,3,"gimnasio"]    
}
const aprobado = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(`${materias[materia][3]}`);
        if (asistencias >= 90){
            console.log(`%c  Asistencias en orden`,`color:green;`,)
        } else {
            console.log(`%c  Falta de asisitencias`,`color:red;`,)
        }
        if (promedio >= 7){
            console.log(`%c  Promedio en orden`,`color:green;`,)
        } else {
            console.log(`%c  Promedio desaprobado `,`color:red;`,)
        }
        if (trabajos >= 3){
            console.log(`%c  trabajos en orden`,`color:green;`,)
        } else {
            console.log(`%c  trabajos desaprobado `,`color:red;`,)
        }
    }
} 
aprobado();