export const getInputs = (form, checked) => {
    return form.querySelectorAll(`input${checked ? ':checked' : ''}`);
}

export const getValues = (...inputs) => {
    return inputs.map(input => input.value);
}

export const handleSubmit = (props) => {
    props.event.preventDefault();
    const inputs = getInputs(props.form, props.checked);
    const values = getValues(...inputs);

    props.callback(values, {inputs, ...props});
}