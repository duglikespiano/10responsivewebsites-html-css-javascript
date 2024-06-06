// Pages
document.querySelectorAll('.logo').forEach((element) => {
	element.addEventListener('click', () => {
		document.querySelector('.front-page').style.display = 'block';
		document.querySelector('.login-page').style.display = 'none';
		document.querySelector('.signup-page').style.display = 'none';
	});
});

document.querySelectorAll('.login').forEach((element) => {
	element.addEventListener('click', () => {
		document.querySelector('.front-page').style.display = 'none';
		document.querySelector('.login-page').style.display = 'block';
		document.querySelector('.signup-page').style.display = 'none';
	});
});

document.querySelectorAll('.signup').forEach((element) => {
	element.addEventListener('click', () => {
		document.querySelector('.front-page').style.display = 'none';
		document.querySelector('.login-page').style.display = 'none';
		document.querySelector('.signup-page').style.display = 'flex';
	});
});
// End of Pages

// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover');
dropdownItems.forEach((element) => {
	element.addEventListener('mouseover', () => {
		element.lastElementChild.style.cssText = 'opacity:1; visibility:visible;';
		element.lastElementChild.style.cssText = 'display: flex';
		document.querySelector('.navbar-container').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)';
	});
	element.addEventListener('mouseout', () => {
		element.lastElementChild.style.cssText = 'opacity:0; visibility:hidden;';
		element.lastElementChild.style.cssText = 'display: none';
		document.querySelector('.navbar-container').style.background = 'none';
	});
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
	const navList = document.querySelector('.nav-list');
	if (navList.style.display === '' || navList.style.display === 'none') {
		navList.style.display = 'block';
	} else {
		navList.style.display = 'none';
	}
});
// End of Navigation

window.addEventListener('resize', () => {
	window.location.reload();
});
