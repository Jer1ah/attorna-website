// form submit functionality
const formSumbitController = (() => {
    _contactForm = document.querySelector('.contact__form form');
    _formButton = document.querySelector('.contact__form-button');
    _formInputs = document.querySelectorAll('.contact__form-input');
    _submittedTitle = document.querySelector('.contact__form h3');
    
    _formButton.addEventListener('click', () => {
        _submittedTitle.style.opacity = "1";

        for(let i = 0; i < _formInputs.length; i++) {
            _formInputs[i].value = "";
        }

        window.setTimeout(() => {
            _submittedTitle.style.opacity = "0";
        }, 3500);
    });
})();

// newsletter submit functionality
const newsletterController = (() => {
    const _newletterInput = document.querySelector('.subscribe input[type="text"]');
    const _newletterButton = document.querySelector('.subscribe input[type="submit"]');
    const _newletterConfirm = document.querySelector('.subscribe h3');

    _newletterButton.addEventListener('click', () => {
        _newletterInput.value = "";
        _newletterConfirm.style.opacity = "1";

        window.setTimeout(() => {
            _newletterConfirm.style.opacity = "0";
        }, 3500);
    });
})();