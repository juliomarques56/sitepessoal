
function typeWhiter(element){
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 85 * i);
    });
}

const nome = document.querySelector('.conteudo h2');
typeWhiter(nome);