

const grande = documentquerySelector('.grande')
const punto = documentquerySelectorAll('.punto') 

punto.forEach( ( cadaPunto , i )=> {
    punto[i] .addEventListener('click' , ()=>{
        let position = i
        let operacion = position * -50

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('.activo')
        })
        punto[i].classList.add('.activo')
    })
})