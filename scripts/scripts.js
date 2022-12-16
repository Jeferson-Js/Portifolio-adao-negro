const btnMenu = document.querySelector("#menu-mobile");
const aside = document.querySelector("aside");

function menuMobile(e) {
    e.name == "menu" ? (e.name = "close") : (e.name = "menu");
    aside.classList.toggle('active')
}
