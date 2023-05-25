const burger = document.querySelector('[data-burger]')
const menu = document.querySelector('[data-menu-list]')
const menuItems = document.querySelectorAll('.menu__link')

burger.addEventListener('click', () => {
	burger.classList.toggle('burger_active')
	menu.classList.toggle('menu__list_visible')
})

menuItems.forEach(el => {
	el.addEventListener('click', () => {
		burger.classList.remove('burger_active')
		menu.classList.remove('menu__list_visible')
	})
})
