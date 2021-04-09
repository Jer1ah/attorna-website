// navigation dropdown functionality
const navigationController = (function() {

    const _button = document.querySelector('.navigation__button');
    const _dropdown = document.querySelector('.navigation__dropdown');

    _button.addEventListener('click', () => {
        if(window.getComputedStyle(_dropdown).visibility === 'hidden') {
            _dropdown.style.visibility = "visible";
            _dropdown.style.opacity = "1";
            _button.childNodes[1].classList.replace('fa-bars', 'fa-times');
        } else {
            _dropdown.style.visibility = "hidden";
            _dropdown.style.opacity = "0";
            _button.childNodes[1].classList.replace('fa-times', 'fa-bars');
        }
    });

}());


// mobile navigation functionality
const mobileNavController = (function() {

    const _mobileNav = document.querySelector('.mobile-navigation');
    const _mobileNavLogo = document.querySelector('.mobile-navigation__logo');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 25) {
            _mobileNav.style.backgroundColor = "#222";
            _mobileNav.style.boxShadow = "0px 0px 10px 5px rgba(17,17,17,0.8)";
        } else if(window.scrollY < 25) {
            _mobileNav.style.backgroundColor = "transparent";
            _mobileNav.style.boxShadow = "none";
        }
    });

}());

const sideNavigationController = (() => {

    const _sideNav = document.querySelector('.side-nav');
    const _mobileNavLogo = document.querySelector('.mobile-navigation__logo');

    _sideNav.style.display = "none";
    _mobileNavLogo.style.display = "inline-block";

})();