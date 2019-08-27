const navBar = document.querySelector("nav");

const changeMenu = () => {
    if (window.scrollY < 150) {
        navBar.classList.add("fix");
        navBar.classList.remove("float");
    }

    else {
        navBar.classList.add("float");
        navBar.classList.remove("fix");
    }
};

window.addEventListener('scroll', changeMenu);