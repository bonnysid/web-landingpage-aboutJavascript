const addInputError = (input, error) => {
    const textError = document.createElement('span');
    textError.classList.add('error-text');
    textError.innerHTML = error;
    textError.style.display = 'none';
    input.before(textError);

    input.addEventListener('change', (e) => {
        if (input.value.trim().length === 0) {
            input.classList.add('error-input');
            textError.style.display = 'inline-block'
        } else {
            input.classList.remove('error-input');
            textError.style.display = 'none'
        }
    })
}

export const checkInput = (input, error) => {
    const previousCheck = () => input.previousElementSibling && input.previousElementSibling.classList.contains('error-text');

    let textError;
    if(previousCheck()) {
        textError = input.previousElementSibling
    } else {
        textError = document.createElement('span');
        textError.classList.add('error-text');
        textError.innerHTML = error;
        textError.style.display = 'none';
    }

    if (!input.previousElementSibling) input.before(textError);

    if (input.value.trim().length === 0) {
        input.classList.add('error-input');
        textError.style.display = 'inline-block'
    } else {
        input.classList.remove('error-input');
        textError.style.display = 'none'
    }

}

export default addInputError;
