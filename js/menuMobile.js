const btnMobileMenu = document.querySelector(".btn-Menu");
function toggleMenu(){
    const nav = document.querySelector(".nav");
    nav.classList.toggle('active');
}

btnMobileMenu.addEventListener('click', toggleMenu);