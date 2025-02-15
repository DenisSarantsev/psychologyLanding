
document.addEventListener('DOMContentLoaded', function() {

	// Анимация кнопки бургер меню
	const burger = document.querySelector('.header__burger-button');
	burger.addEventListener('click', () => {
		burger.classList.toggle('open');
	});
});
