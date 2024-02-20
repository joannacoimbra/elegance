// Adiciona a classe 'animado' quando a seção entra na área visível
document.addEventListener("DOMContentLoaded", function () {
    var quemSomos = document.getElementById("quem-somos");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function animarQuemSomos() {
        if (isInViewport(quemSomos)) {
            quemSomos.classList.add("animado");
            // Remova o ouvinte após a animação para não dispará-la novamente
            document.removeEventListener("scroll", animarQuemSomos);
        }
    }

    // Adiciona um ouvinte de rolagem para acionar a animação
    document.addEventListener("scroll", animarQuemSomos);

    // Dispara a animação imediatamente se a seção já estiver visível ao carregar a página
    animarQuemSomos();
});
