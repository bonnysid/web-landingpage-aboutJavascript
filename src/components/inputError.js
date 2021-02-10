const addInputError = (input, error) => {
    const textError = document.createElement('span');
    textError.classList.add('error-text');
    textError.innerHTML = error;
    textError.style.display = 'none';
    input.before(textError);

    input.addEventListener('input', (e) => {
        if (input.value.trim().length === 0) {
            input.classList.add('error-input');
            textError.style.display = 'inline-block'
        } else {
            input.classList.remove('error-input');
            textError.style.display = 'none'
        }
    })
}


export default addInputError;
