export const getInputs = (form) => {
    return form.querySelectorAll(`input`);
}

export const getValues = (...inputs) => {
    return inputs.map(input => input.value);
}

export const handleSubmit = (props) => {
    props.event.preventDefault();
    const inputs = getInputs(props.form);
    const values = getValues(...inputs);

    props.callback(values, {...props});
}