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
console.log(params);

function ativarFormulario(param) {
    const element = document.getElementById(param)
    console.log(element)
    if (element) {
        element.checked = true;
    }
}

params.forEach(ativarFormulario);