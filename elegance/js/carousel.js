const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const indicadoresContainer = document.querySelector('.indicadores');

let indiceSlideAtual = 0;

// Adiciona indicadores
slides.forEach((_, i) => {
    const indicador = document.createElement('div');
    indicador.classList.add('indicador');
    indicador.addEventListener('click', () => mostrarSlide(i));
    indicadoresContainer.appendChild(indicador);
});

// Inicializa o carousel
mostrarSlide(indiceSlideAtual);

// Adiciona a passagem automática de slides a cada 3 segundos (ajuste conforme necessário)
setInterval(avancarSlide, 6000);

function avancarSlide() {
    indiceSlideAtual++;
    if (indiceSlideAtual >= document.querySelectorAll('.slide').length) {
        indiceSlideAtual = 0;
    }
    mostrarSlide(indiceSlideAtual);
}

function mostrarSlide(indice) {
    // Atualiza a posição do carousel
    carousel.style.transform = `translateX(${-indice * 100}%)`;

    // Atualiza os indicadores
    const indicadores = document.querySelectorAll('.indicador');
    indicadores.forEach((indicador, i) => {
        if (i === indice) {
            indicador.classList.add('ativo');
        } else {
            indicador.classList.remove('ativo');
        }
    });

    // Atualiza o índice do slide atual
    indiceSlideAtual = indice;
}

