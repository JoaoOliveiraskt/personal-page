

const titulo = document.querySelector('.digitando');
let interval = 0
let maxSlider = document.querySelectorAll('.projects-images').length -1;


function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i )=> {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 150 * i)
    });
}
ativaLetra(titulo);

const acao = () => {
    
    let images = document.querySelectorAll('.projects-images img');
    setInterval(() => {

        images[interval].style.display = 'none';
        interval++;
        if(interval > maxSlider) {
            interval = 0
        } 
        images[interval].style.display = 'block'
    }, 4000)
    
}
acao()