import {addEventListeners, getInputs, handleSubmit, isNumeric} from "./formFunctions";
import addInputErrorValidation from "./inputError";

const activateWordsBlock = () => {
    const wordsForm = document.querySelector('.words-form');
    const inputs = getInputs(wordsForm);
    const ERROR = 'Введите слово';

    wordsForm.addEventListener('submit', addInputErrorValidation({
        input: inputs[0],
        error: ERROR,
        errorCheck: () => inputs[0].value.length === 0
    }))
    wordsForm.addEventListener('submit', addInputErrorValidation({
        input: inputs[1],
        error: ERROR,
        errorCheck: () => inputs[1].value.length === 0
    }))

    addEventListeners({
        elements: inputs,
        events: ['input'],
        actionCreator: addInputErrorValidation,
        props: {
            forElemActions: [{
                input: inputs[0],
                error: ERROR,
                errorCheck: () => inputs[0].value.length === 0

            },
                {
                    input: inputs[1],
                    error: ERROR,
                    errorCheck: () => inputs[0].value.length === 0
                }]
        }});

    const checkForEquals = (values, props) => {
        const [first, second] = values;
        const answer = props.form.querySelector('p');

        answer.innerHTML = `Равны: <span style="color: ${first.trim().length === second.trim().length ? '#70b35f' : '#bf5050'}">${first.trim().length === second.trim().length}</span>`
    }

    wordsForm.addEventListener('submit', (event) => handleSubmit({
        event,
        form: wordsForm,
        callback: checkForEquals
    }))
}

export default activateWordsBlock;