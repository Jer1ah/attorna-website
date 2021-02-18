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


// side-nav scroll functionality
const sideNavController = (function() {

    const _sideNavItems = document.querySelectorAll('.side-nav__listItem');
    const _mainSection = document.querySelector('.main');
    const _bioSection = document.querySelector('.bio');

    window.addEventListener('scroll', () => {

        for(let i = 0; i < _sideNavItems.length; i++) {
            _sideNavItems[i].classList.remove('active');
        }

        if( _mainSection.getBoundingClientRect().top <= 0 && _mainSection.getBoundingClientRect().bottom >= 0 ) {
            _sideNavItems[0].classList.add('active');
        } else if( _bioSection.getBoundingClientRect().top <= 0 && _bioSection.getBoundingClientRect().bottom >= 0 ) {
            _sideNavItems[2].classList.add('active');
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

        const _bioParallax = document.querySelector('.bio__image img');
        _bioParallax.style.transform = `translateY(${_scrollPosition * .25 - 625}px)`;

        const _educationParallax = document.querySelector('.education__image img');
        _educationParallax.style.transform = `translateY(${_scrollPosition * .25 - 825}px)`;

        const _testimonialsParallax = document.querySelector('.testimonials__background-image');
        _testimonialsParallax.style.transform = `translateY(${_scrollPosition * .25 - 1225}px)`;

    });

}());


// adding slick slider
const slickSliderController = (function() {
    $('.testimonials__list').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3500
    });
}());