import {getInputs, handleSubmit, isNumeric} from "./formFunctions";
import addInputErrorValidation from "./inputError";

const error = 'Введите число!';

const activateMinMaxBlock = () => {
    const minMaxForm = document.querySelector('.minmax-form');
    const inputs = getInputs(minMaxForm);

    minMaxForm.addEventListener('submit', addInputErrorValidation({
        input: inputs[0],
        error: 'Введите числа!',
        errorCheck: () => inputs[0].value.split(',').some(num => !isNumeric(num) || !inputs[0].value.length)
    }))

    inputs.forEach(input => {
        input.addEventListener('input', addInputErrorValidation({
            input,
            error: 'Введите числа!',
            errorCheck: () => input.value.split(',').some(num => !isNumeric(num) || !input.value.length)
        }))
    });

    const findMinMax = (values, props) => {
        let [numValues] = values;
        if(numValues.split(',').some(num => !isNumeric(num)) || !numValues.length) return;
        numValues = numValues.trim().split(',').map(num => +num);



        const {form} = props;
        const min = form.querySelector('.min');
        const max = form.querySelector('.max');



        min.innerHTML = `<span style="color: #bf5050">Min</span>: ${Math.min(...numValues)}`;
        max.innerHTML = `<span style="color: #70b35f">Max</span>: ${Math.max(...numValues)}`;
    }

    minMaxForm.addEventListener('submit', event => handleSubmit({
        event,
        form: minMaxForm,
        callback: findMinMax
    }))
}

export default activateMinMaxBlock;