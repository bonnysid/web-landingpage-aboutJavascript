const activateBurger = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.navbar');
    const aside = document.querySelector('.aside');

    const toggleMenu = () => {
        document.body.classList.toggle('closed');
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        aside.classList.toggle('active');
    }

    burger.addEventListener('click', toggleMenu);
    aside.addEventListener('click', toggleMenu)
}

export default activateBurger;