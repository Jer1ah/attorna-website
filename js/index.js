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


// adding parallax scroll effect
const parallaxScrollController = (function() {

    window.addEventListener('scroll', () => {

        let _scrollPosition = window.pageYOffset;

        const _mainParallax = document.querySelector('.main-left img');
        _mainParallax.style.transform = `translateY(${_scrollPosition * .25}px)`;

        const _practiceParallax = document.querySelector('.practice-image img');
        _practiceParallax.style.transform = `translateY(${_scrollPosition * .25 - 210}px)`;

        const _aboutParallax = document.querySelector('.about__image');
        _aboutParallax.style.transform = `translateY(${_scrollPosition * .25 - 410}px)`;

    });

}());

$('.testimonials__list').slick({
    dots: true
});
