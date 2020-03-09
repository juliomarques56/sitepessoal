$(document).ready(function(){
    $(".menu-button").click(function(){
    $(".menu-bar").toggleClass( "open" );
    })
    })


function typeWhiter(element){
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 85 * i);
    });
}

const nome = document.querySelector('h2');
typeWhiter(nome);