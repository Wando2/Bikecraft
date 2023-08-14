// ativar menu
const menu = document.querySelectorAll('header ul a');

function menuAtivo(link) {
    
    if (document.URL.includes(link.href)) {
        link.classList.add('active');
    }
}

menu.forEach(menuAtivo);

// passagem de parametro por links para o formulario

const params = new URLSearchParams(window.location.search);

function ativarFormulario(param) {
    const element = document.getElementById(param)
    if (element) {
        element.checked = true;
    }
}

params.forEach(ativarFormulario);


// perguntas frequentes toggle

const botao = document.querySelectorAll('.perguntas-frequentes button');
// console.log(botao[0].getAttribute('aria-expanded'));

function togglePerguntas(event) {
    const botao = event.currentTarget;
    const resposta = document.getElementById(botao.getAttribute('aria-controls'));
    
    resposta.classList.toggle('active');
    botao.setAttribute('aria-expanded', botao.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    console.log(botao.getAttribute('aria-expanded'));

   
}


function addEvent(botao) {
    botao.addEventListener('click', togglePerguntas);

}

botao.forEach(addEvent);


// carrousel galeria

const galeria = document.querySelectorAll('.carrousel-bikes img');

const galeriaContainer = document.querySelector('.carrousel-bikes');  


console.log(galeria);
console.log(galeriaContainer);


function trocarImagem(event) {
    const imagem = event.currentTarget;
    const mediaQuery = window.matchMedia('(min-width: 950px)').matches;
    if (mediaQuery) { 
        galeriaContainer.prepend(imagem);
    }
}

function addEventGaleria(imagem) { 
    imagem.addEventListener('click', trocarImagem); 
}

galeria.forEach(addEventGaleria);

// simple anime

if (window.SimpleAnime) {
    new SimpleAnime();
}

