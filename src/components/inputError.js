const checkForTextError = (input) => {
    return input.previousElementSibling && input.previousElementSibling.classList.contains('error-text') ? input.previousElementSibling : null;
}

const addInputErrorValidation = ({input, error, errorCheck}) => {
    const textError = checkForTextError(input) || addTextError(input, error);

    return (e) => {
        if (errorCheck()) activateError(input, textError)
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


export default addInputErrorValidation;
