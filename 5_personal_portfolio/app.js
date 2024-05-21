const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

const updateElements = () => {
	if (window.scrollY >= navbarOffsetTop) {
		navbar.classList.add('fixed');
	} else {
		navbar.classList.remove('fixed');
	}

	sections.forEach((section, i) => {
		if (window.scrollY >= section.offsetTop - 10) {
			navbarLinks.forEach((navbarLink) => {
				navbarLink.classList.remove('active');
			});
			navbarLinks[i].classList.add('active');
		}
	});

	if (window.scrollY + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll('.progress-percent').forEach((element, i) => {
			element.style.width = `${progressBarPercents[i]}%`;
			element.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
		});
	}
};

window.addEventListener('scroll', () => {
	updateElements();
});

window.addEventListener('resize', () => {
	window.location.reload();
});

updateElements();
