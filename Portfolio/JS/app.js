function openSlideMenu() {
    side = document.getElementById('side-menu').style.width = '300px';
    main = document.getElementById('main').style.marginLeft = '300px';
}

function closeSlideMenu() {
    side = document.getElementById('side-menu').style.width = '0';
    main = document.getElementById('main').style.marginLeft = '0';
}

document.getElementById('side-menu').addEventListener('click', closeSlideMenu)

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 150);
})

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky-in", window.scrollY > 0);
})

AOS.init();

