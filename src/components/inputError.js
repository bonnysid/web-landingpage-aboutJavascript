const addInputError = (input, error) => {
    input.addEventListener('change', (e) => {
        if (input.value.trim().length === 0) {
            input.classList.add('error-input');
            input.prepend(`<span class="error-text">${error}</span>`);
        } else {
            input.classList.remove('error-input');
            input.querySelector('.error-text').remove();
        }
    })
}

export default addInputError;
