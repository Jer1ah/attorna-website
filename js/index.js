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