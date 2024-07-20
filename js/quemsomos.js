//animação da seção quem somos 
document.addEventListener("DOMContentLoaded", function () {
    var quemSomos = document.getElementById("quem-somos");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function animarQuemSomos() {
        if (isInViewport(quemSomos)) {
            quemSomos.classList.add("animado");
            document.removeEventListener("scroll", animarQuemSomos);
        }
    }

    document.addEventListener("scroll", animarQuemSomos);

});
