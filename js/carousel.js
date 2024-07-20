const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const indicadoresContainer = document.querySelector('.indicadores');

let indiceSlideAtual = 0;

//indicadores
slides.forEach((_, i) => {
    const indicador = document.createElement('div');
    indicador.classList.add('indicador');
    indicador.addEventListener('click', () => mostrarSlide(i));
    indicadoresContainer.appendChild(indicador);
});

// inicia o carousel
mostrarSlide(indiceSlideAtual);

//passagem automática de slides
setInterval(avancarSlide, 6000);

function avancarSlide() {
    indiceSlideAtual++;
    if (indiceSlideAtual >= document.querySelectorAll('.slide').length) {
        indiceSlideAtual = 0;
    }
    mostrarSlide(indiceSlideAtual);
}

function mostrarSlide(indice) {
    //posição do carousel
    carousel.style.transform = `translateX(${-indice * 100}%)`;
    //atualiza os indicadores
    const indicadores = document.querySelectorAll('.indicador');
    indicadores.forEach((indicador, i) => {
        if (i === indice) {
            indicador.classList.add('ativo');
        } else {
            indicador.classList.remove('ativo');
        }
    });

    //indicador do slide atual
    indiceSlideAtual = indice;
}

