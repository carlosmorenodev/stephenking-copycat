const responsiveNav = document.getElementById('responsiveNav');
const responsiveCloseNav = document.getElementById('responsiveNavClose');
const headerNav = document.getElementById('headerNav');

/* Open nav responsive */
responsiveNav.addEventListener("click", () => {
    headerNav.classList.add('header-nav-open');
})

/* Close nav responsive */
responsiveCloseNav.addEventListener("click", () => {
    headerNav.classList.remove('header-nav-open');
})
