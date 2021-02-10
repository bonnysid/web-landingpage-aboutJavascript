export const addInputErrorToValueChange = (input, error) => {
    input.addEventListener('input', (e) => {
        if (input.value.trim().length === 0) activateError(input, textError)
        else deactivateError(input, textError);
    })
}

const checkForTextError = (input) => {
    return input.previousElementSibling && input.previousElementSibling.classList.contains('error-text') ? input.previousElementSibling : null;
}

const addInputErrorToEvent = (input, error) => {
    const textError = checkForTextError(input) || addTextError(input, error);

    return (e) => {
        if (input.value.trim().length === 0) activateError(input, textError)
        else deactivateError(input, textError);
    }
}

const addTextError = (input, error) => {
    const textError = document.createElement('span');
    textError.classList.add('error-text');
    textError.innerHTML = error;
    textError.style.display = 'none';
    input.before(textError);
    return textError;
}

const activateError = (input, textError) => {
    input.classList.add('error-input');
    textError.style.display = 'inline-block'
}

const deactivateError = (input, textError) => {
    input.classList.remove('error-input');
    textError.style.display = 'none'
}


export default addInputErrorToEvent;
