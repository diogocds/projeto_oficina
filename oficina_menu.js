const openMenu = document.getElementById('openMenu');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', () => {
    menu.style.display = 'block'
    menu.style.right = (menu.offsetWidth * -1) + 'px'
    openMenu.style.display = 'none'
    setTimeout(() => {
        menu.style.opacity = '1'
        menu.style.right = '0'
    }, 10)

})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'
    menu.style.right = (menu.offsetWidth * -1) + 'px'
    setTimeout(() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200)
})