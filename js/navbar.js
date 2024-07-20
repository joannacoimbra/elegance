//classe "scrolled-down" ao body quando rolar para baixo
window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled-down", window.scrollY > 0);
});


// sanduiche
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
});
