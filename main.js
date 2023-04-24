const form = document.querySelector('form');
let is = document.querySelectorAll('.points');
let span = document.querySelector('#tuPuntaje');
const boxP = document.querySelector('#puntuacion');
const boxT = document.querySelector('#thanksYou');

let btnActual = 0;

is.forEach((i,index) =>{
    i.addEventListener('click', () =>{
        is[btnActual].classList.remove('pulsado')
        btnActual = index
        is[btnActual].classList.add('pulsado')
    })
})

/*if(i.classList.contains('pulsado')){
    i.classList.remove('pulsado')
}else{
    i.classList.add('pulsado')
}*/

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    is.forEach(i =>{

        if(i.classList.contains('pulsado')){
            let puntaje = i.textContent
                boxP.style.display = "none"
                span.textContent = puntaje;
                boxT.style.display = "block"
            return
        }else{
            return false;
        }
    })
})




