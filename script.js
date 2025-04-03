document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            header.classList.remove("hidden-header");
        } else {
            header.classList.add("hidden-header");
        }
        prevScrollPos = currentScrollPos;
    });
});
