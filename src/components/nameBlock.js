import {handleSubmit} from "./formFunctions";

const setName = (name) => localStorage.setItem('name', name);
const getName = () => localStorage.getItem('name');
const deleteName = () => localStorage.removeItem('name');
const logoutFunc = (e, form, label, title) => {
    console.log(form);
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

const activateNameBlock = () => {
    const nameForm = document.querySelector('.name-form');

    startCheck(nameForm);

    const getNameInput = (values, props) => {
        const {form} = props;

        if (!startCheck(form)) {
            const [name] = values;
            setName(name);

            const formParent = form.parentElement;
            const title = formParent.querySelector('.title');
            const label = formParent.querySelector('label');

            form.style.display = 'none';
            label.style.display = 'none';
            activateLogin(form, label, title);

            title.innerHTML = `Привет, ${getName()}`;
        }

    }

    nameForm.addEventListener('submit', evt => handleSubmit(evt, nameForm, getNameInput))
}

export default activateNameBlock;