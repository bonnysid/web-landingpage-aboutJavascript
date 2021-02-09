import {handleSubmit} from "./formFunctions";

const activateWordsBlock = () => {
    const wordsForm = document.querySelector('.words-form');

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