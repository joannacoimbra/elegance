let indiceDepoimentoAtual = 0;

function mudarDepoimento(direcao) {
    const depoimentos = document.querySelector('.depoimentos');
    const larguraDepoimento = document.querySelector('.depoimento').offsetWidth;

    indiceDepoimentoAtual = Math.max(0, Math.min(indiceDepoimentoAtual + direcao, depoimentos.children.length - 1));

    depoimentos.style.transform = `translateX(${-indiceDepoimentoAtual * larguraDepoimento}px)`;
}
