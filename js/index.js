// navigation dropdown functionality
const navigationController = (function() {

    const _button = document.querySelector('.navigation__button');
    const _dropdown = document.querySelector('.navigation__dropdown');

    _button.addEventListener('click', () => {
        _dropdown.style.visibility = "visible";
        _dropdown.style.opacity = "1";
    });

}());