const icons = document.querySelectorAll('.section1-icons i');
document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((element) => {
		element.classList.toggle('change');
	});
});

let iconCounter = 1;

setInterval(() => {
	iconCounter++;
	const icon = document.querySelector('.section1-icons i.change');
	icon.classList.remove('change');
	if (iconCounter > icons.length) {
		icons[0].classList.add('change');
		iconCounter = 1;
	} else {
		icon.nextElementSibling.classList.add('change');
	}
}, 3000);
