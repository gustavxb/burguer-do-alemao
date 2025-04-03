document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        let currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            // Mostra o cabeçalho ao rolar para cima
            header.style.transform = "translateY(0)";
        } else {
            // Esconde o cabeçalho ao rolar para baixo
            header.style.transform = "translateY(-100%)";
        }

        prevScrollPos = currentScrollPos;
    });
});