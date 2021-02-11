import {getInputs, handleSubmit} from "./formFunctions";
import addInputErrorValidation from "./inputError";
const error = 'Введите число!';

const activateMinMaxBlock = () => {
    const minMaxForm = document.querySelector('.minmax-form');
    const inputs = getInputs(minMaxForm);

    const findMinMax = (values, props) => {
        let [numValues] = values;
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