



/*parte que alterna entre escondr e aparecer conteudo do menu lateral da pagina "por que jodar*/
const iconeSub = document.querySelectorAll(".iconSub");
const subTexto = document.querySelectorAll(".right-container-subtext ");


iconeSub.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const subtext = subTexto[index];
        if (subtext.style.display === "none" || subtext.style.display === "") {
            subtext.style.display = "block";
            icon.classList.remove("fi-rr-angle-small-down");
            icon.classList.add("fi-rr-angle-small-up");
        } else {
            subtext.style.display = "none";
            icon.classList.remove("fi-rr-angle-small-up");
            icon.classList.add("fi-rr-angle-small-down");
        }
    });
});


document.querySelector('.hamburger').addEventListener('click', function() {
    if (window.innerWidth <= 800) {
        document.querySelector('.button-bar-header').classList.toggle('open');
    }
});