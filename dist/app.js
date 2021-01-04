const navToggle = document.querySelector('.toggle-nav');

navToggle.addEventListener('click', () => {
	const header = document.querySelector('header');
	const overlay = document.querySelector('.overlay');

	header.classList.toggle('active');
	overlay.classList.toggle('active');

	overlay.addEventListener('click', () => {
		header.classList.remove('active');
		overlay.classList.remove('active');
	});
});
