document.querySelectorAll('.story-btn').forEach((element) => {
	element.addEventListener('click', () => {
		element.classList.toggle('active');
		element.nextElementSibling.classList.toggle('active');
	});
});
