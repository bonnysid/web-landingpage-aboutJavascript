import {handleSubmit} from "./formFunctions";
import addInputError, {checkInput} from "./inputError";

const setName = (name) => localStorage.setItem('name', name);
const getName = () => localStorage.getItem('name');
const deleteName = () => localStorage.removeItem('name');
const logoutFunc = (e, form, label, title) => {
    const loginContainer = document.querySelector('.login-container');
    e.preventDefault();
    deleteName();
    loginContainer.remove();
    form.style.display = 'grid';
    label.style.display = 'inline-block';
    title.innerHTML = `Привет, дорогой друг!`;
}
const activateLogin = (form, label, title) => {
    const logoContainer = document.querySelector('.logo-container');
    const login = document.createElement('div');

    login.classList.add('login-container')
    login.innerHTML = `
        <h2 class="login">${getName()}</h2>
        <svg class="logout">
            <use xlink:href="./src/assets/img/icons.svg#logout"></use>
        </svg>
        `;
    logoContainer.append(login);

    const logout = login.querySelector('.logout');
    logout.addEventListener('click', e => logoutFunc(e, form, label, title))
}
const startCheck = (form) => {
    if (getName()) {
        const formParent = form.parentElement;
        const title = formParent.querySelector('.title');
        const label = formParent.querySelector('label');

        activateLogin(form, label, title);

        form.style.display = 'none';
        label.style.display = 'none';
        title.innerHTML = `Привет, ${getName()}`;

        return true;
    }
    return false;
}
const error = 'Имя не может быть пустым';

const activateNameBlock = () => {
    const nameForm = document.querySelector('.name-form');
    const input = nameForm.querySelector('input');

    startCheck(nameForm);
    addInputError(input, error);

    const getNameInput = (values, props) => {
        const {form} = props;
        const [input] = props.inputs;
        if(input.value.trim().length === 0) return;

        if (!startCheck(form)) {
            const [name] = values;
            setName(name);

            const formParent = form.parentElement;
            const title = formParent.querySelector('.title');
            const label = formParent.querySelector('label');
            const input = form.querySelector('input');
            input.value = '';

            form.style.display = 'none';
            label.style.display = 'none';
            activateLogin(form, label, title);

            title.innerHTML = `Привет, ${getName()}`;
        }

    }

    nameForm.addEventListener('submit', event => handleSubmit({
        event,
        form: nameForm,
        callback: getNameInput
    }))
}

export default activateNameBlock;