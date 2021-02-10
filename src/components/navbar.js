const activateNavbar = () => {
    const navbar = document.querySelector('.navbar');
    const links = navbar.querySelectorAll('.navbar-link');

    const selectButton = (link) => {
        disableActive();
        addActive(link);
    }

    const disableActive = () => {
        links.forEach(link => link.classList.remove('active'));
    }

    const addActive = (link) => link.classList.add('active');

    links.forEach(link => link.addEventListener('click', () => selectButton(link)));
}

export default activateNavbar;