const container = document.querySelector('.container');
const backgroundColors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
let backgroundIndex = 0;

const logoTexts = document.querySelectorAll('.logo h1 span');
logoTexts.forEach((text, i) => {
	text.style.animationDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.navigation-button').forEach((element) => {
	element.addEventListener('click', () => {
		element.parentElement.parentElement.classList.toggle('active');
	});
});

document.querySelectorAll('.nav-link').forEach((element) => {
	element.style.cssText = `background-color : ${backgroundColors[backgroundIndex++]}`;
});

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
	container.classList.add('active');
});

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
	container.classList.remove('active');
});
