const submenu = document.querySelector('.mobile-menu .submenu__list'),
	submenuBtn = document.querySelector('.link-sub'),
	submenuClose = document.querySelector('.menu__close'),
	upBtn = document.querySelector('.btn_up');

upBtn.addEventListener('click', () => {
	document.documentElement.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

submenuBtn.addEventListener('click', e => {
	e.preventDefault();
	submenu.classList.toggle('subhide');
	submenuBtn.classList.toggle('link--sub--active');
	console.log('test');
});

submenuClose.addEventListener('click', () => {
	document.body.classList.toggle('over_hide');
	burgerMenu.classList.toggle('mobile-menu--active');
	// burger.classList.toggle('burger_active');
});

const burger = document.querySelector('.nav-site__burger--mobile'),
	burgerMenu = document.querySelector('.nav-site_list--mobile'),
	burgerWrapper = document.querySelector('.site-header__nav'),
	burgerItem = document.querySelectorAll('.mobile-menu__item > a');

function closeBurgerMenu() {
	document.body.classList.remove('over_hide');
	burgerMenu.classList.remove('mobile-menu--active');
	// burger.classList.remove('burger_active');
}
burger.addEventListener('click', () => {
	document.body.classList.toggle('over_hide');
	burgerMenu.classList.toggle('mobile-menu--active');
	// burger.classList.toggle('burger_active');
});

document.addEventListener('keydown', e => {
	if (
		e.code == 'Escape' &&
		burgerMenu.classList.contains('mobile-menu--active')
	) {
		closeBurgerMenu();
	}
});
