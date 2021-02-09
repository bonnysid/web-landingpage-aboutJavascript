export const getInputs = (form) => {
    return form.querySelectorAll(`input`);
}

export const getValues = (...inputs) => {
    return inputs.map(input => input.value);
}

export const handleSubmit = (e, form, callback, props) => {
    e.preventDefault();
    const inputs = getInputs(form);
    const values = getValues(...inputs);

    callback(values, {form, ...props});
}