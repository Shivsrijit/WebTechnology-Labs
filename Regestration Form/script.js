document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const fullNameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const ageInput = form.querySelector('input[type="number"]');
    const genderSelect = form.querySelector('#gender');
    const eventSelect = form.querySelector('#event');
    const submitButton = document.querySelector('button');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?(\d[\d\-\(\)\s]{5,}\d)$/;

    function showError(element, message) {
        const span = element.parentElement.querySelector('span');
        span.textContent = message;
        span.style.color = 'red';
        element.style.borderColor = 'red';
    }

    function clearError(element) {
        const span = element.parentElement.querySelector('span');
        span.textContent = '';
        element.style.borderColor = '#83a1b9dd';
    }

    function validateField(input, validationFn) {
        if (!validationFn(input.value)) {
            showError(input, 'This field is invalid.');
            return false;
        }
        clearError(input);
        return true;
    }

    function validateForm() {
        const isFullNameValid = validateField(fullNameInput, value => value.trim() !== '');
        const isEmailValid = validateField(emailInput, value => emailRegex.test(value));
        const isPhoneValid = validateField(phoneInput, value => phoneRegex.test(value));
        const isAgeValid = validateField(ageInput, value => value !== '' && parseInt(value) >= 18);
        const isGenderValid = validateField(genderSelect, value => value !== 'Select');
        const isEventValid = validateField(eventSelect, value => value !== 'Select');

        return isFullNameValid && isEmailValid && isPhoneValid && isAgeValid && isGenderValid && isEventValid;
    }

    form.addEventListener('input', (event) => {
        const input = event.target;
        if (input === fullNameInput) {
            validateField(input, value => value.trim() !== '');
        } else if (input === emailInput) {
            validateField(input, value => emailRegex.test(value));
        } else if (input === phoneInput) {
            validateField(input, value => phoneRegex.test(value));
        } else if (input === ageInput) {
            validateField(input, value => value !== '' && parseInt(value) >= 18);
        } else if (input === genderSelect) {
            validateField(input, value => value !== 'Select');
        } else if (input === eventSelect) {
            validateField(input, value => value !== 'Select');
        }
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please correct the errors in the form.');
        }
    });
});