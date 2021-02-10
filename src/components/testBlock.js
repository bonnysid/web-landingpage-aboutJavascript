import {handleSubmit} from "./formFunctions";

const activateTest = () => {
    const testForm = document.querySelector('.test-form');
    const testTitle = document.querySelector('.test-title');

    const submitForm = (values, props) => {
        const rightAnswers = values.reduce((total, answer, i) => total + (answer.toLowerCase().trim() === props.rightAnswers[i] ? 1 : 0), 0);
        const againBtn = document.createElement('button');
        againBtn.classList.add('btn');
        againBtn.innerHTML = 'Пройти заново';
        againBtn.style.margin = '1em auto';

        let color;
        let additionalText;

        if (rightAnswers <= 3) {
            color = '#bf5050';
            additionalText = 'вам нужно подтянуть свои знания!'
        }
        else if (rightAnswers <= 7 ) {
            color = '#edd640';
            additionalText = 'не плохой результат!'
        }
        else {
            color = '#70b35f';
            additionalText = 'отличный результат!'
        }



        const resultTest = document.createElement('p');
        resultTest.innerHTML = `${rightAnswers} / 10, ${additionalText}`;
        resultTest.style.textAlign = 'center';
        resultTest.style.color = `${color}`;
        props.form.style.display = 'none';

        againBtn.addEventListener('click', ev => {
            props.form.style.display = 'block';
            resultTest.remove();
            againBtn.remove();
            props.inputs.forEach(input => input.checked = false);
        })

        props.title.innerHTML = 'Результат';
        props.title.insertAdjacentElement('afterend', resultTest);
        resultTest.insertAdjacentElement('afterend', againBtn);



    }

    testForm.addEventListener('submit', event => handleSubmit({
        event,
        form: testForm,
        checked: true,
        callback:submitForm,
        title: testTitle,
        rightAnswers: [
            'max',
            'min',
            'date',
            'forinterval',
            'tripleeq',
            'ceil',
            'floor',
            'same',
            'no',
            'node'
        ]
    }))
}

export default activateTest;