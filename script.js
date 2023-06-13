const titulo = document.querySelector('.digitando');
let interval = 0
let maxSlider = document.querySelectorAll('.projects-images').length -1;
const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu')
const menuLinks = document.querySelectorAll('.menu-link')

iconMenu.addEventListener('click', () => {
    menu.classList.toggle('active')    
})

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})



function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i ) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 150 * i)
    });
}
ativaLetra(titulo);
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }




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