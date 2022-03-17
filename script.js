const menu = document.getElementsByClassName('menu-icon')[0]
const nav = document.getElementsByClassName('navbar')[0]

menu.addEventListener('click', ()=> {
    menu.classList.toggle('menu-icon-active')
    nav.classList.toggle('navbar-active')
})