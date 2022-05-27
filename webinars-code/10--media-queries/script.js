const burger = document.getElementById('burgerBtn')

burger.addEventListener('click', e => {
    const menu = document.getElementById('menu')
    menu.classList.toggle('nav-menu--active')
})