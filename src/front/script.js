const logo = document.querySelector('.logoDownload');

let scale = 1;
let direction = 1;

function animateLogo() {
    scale += 0.0005 * direction;
    if (scale >= 1.1 ) direction = -1;
    if (scale <= 0.9 ) direction = 1;

    logo.style.transform = `scale(${scale})`;

    requestAnimationFrame(animateLogo);
}

animateLogo();

const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".navButtonMobile");

burger.addEventListener("click", () => {
    menuMobile.classList.toggle("OpenBurger");
    menuMobile.classList.toggle("closeBurger");
});