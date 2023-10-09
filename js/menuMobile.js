const btnMobileMenu = document.querySelector(".btn-Menu");
const navigationHeader = document.querySelector(".menu");

function toggleMenu(){
   const nav = document.querySelector(".nav")
    nav.classList.toggle('active');
}

btnMobileMenu.addEventListener('click', toggleMenu);