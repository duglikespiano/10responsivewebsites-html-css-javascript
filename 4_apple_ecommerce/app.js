// Common JS
document.querySelectorAll('.controls a, .watch-control, .iphone-btn').forEach((element) => {
	element.addEventListener('click', (event) => {
		event.preventDefault();
	});
});
// End of Common JS

// Slideshow
let backgroundCounter = 1;

const createSlideShowDivs = () => {
	for (let i = 1; i <= 5; i++) {
		const div = document.createElement('div');
		div.style.backgroundImage = `url(./image/slideshow/section-1-bg-${i}.jpg)`;
		i === 1 && div.classList.add('active');
		document.querySelector('.slideshow').appendChild(div);
	}
};

const updateSlideShow = () => {
	setInterval(() => {
		const divs = document.querySelectorAll('.slideshow div');
		const div = document.querySelector('.slideshow div.active');

		div.classList.remove('active');
		backgroundCounter++;

		if (backgroundCounter < divs.length) {
			div.nextElementSibling.classList.add('active');
		} else {
			divs[0].classList.add('active');
			backgroundCounter = 1;
		}
	}, 10000);
};

createSlideShowDivs();
updateSlideShow();
// End of Slideshow

// Cube
let cubeRotateXDegree = 0;
let cubeRotateYDegree = 20;
let cubeRotateZDegree = 0;
let isUserHovering = false;
let interval;
const cube = document.querySelector('.cube');

document.querySelector('.top-x-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${(cubeRotateXDegree += 20)}deg) rotateY(${cubeRotateYDegree}deg) rotateZ(${cubeRotateZDegree}deg)`;
});

document.querySelector('.bottom-x-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${(cubeRotateXDegree -= 20)}deg) rotateY(${cubeRotateYDegree}deg) rotateZ(${cubeRotateZDegree}deg)`;
});

document.querySelector('.left-y-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${cubeRotateXDegree}deg) rotateY(${(cubeRotateYDegree -= 20)}deg) rotateZ(${cubeRotateZDegree}deg)`;
});

document.querySelector('.right-y-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${cubeRotateXDegree}deg) rotateY(${(cubeRotateYDegree += 20)}deg) rotateZ(${cubeRotateZDegree}deg)`;
});

document.querySelector('.top-z-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${cubeRotateXDegree}deg) rotateY(${cubeRotateYDegree}deg) rotateZ(${(cubeRotateZDegree -= 20)}deg)`;
});

document.querySelector('.bottom-z-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${cubeRotateXDegree}deg) rotateY(${cubeRotateYDegree}deg) rotateZ(${(cubeRotateZDegree += 20)}deg)`;
});

document.querySelector('.controls').addEventListener('mouseover', () => {
	isUserHovering = true;
	cubeAutoRotate();
});

document.querySelector('.controls').addEventListener('mouseout', () => {
	isUserHovering = false;
	cubeAutoRotate();
});

const cubeAutoRotate = () => {
	if (!isUserHovering) {
		interval = setInterval(() => {
			cube.style.transform = `rotateX(${cubeRotateXDegree}deg) rotateY(${cubeRotateYDegree++}deg) rotateZ(${cubeRotateZDegree}deg)`;
		}, 100);
	} else {
		clearInterval(interval);
	}
};

cubeAutoRotate();
// End of Cube

// Section3
const section3Content = document.querySelector('.section3-content');
window.addEventListener('scroll', () => {
	if (window.scrollY + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
		section3Content.classList.add('active');
	}
});
// End of Section3

// Section4
let axisX = 0;
let axisY = 0;
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');
const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

const hideControl = () => {
	if (axisY === -280) {
		watchTopControl.classList.add('hidden-controller');
	} else {
		watchTopControl.classList.remove('hidden-controller');
	}

	if (axisY === 280) {
		watchBottomControl.classList.add('hidden-controller');
	} else {
		watchBottomControl.classList.remove('hidden-controller');
	}

	if (axisX === -280) {
		watchLeftControl.classList.add('hidden-controller');
	} else {
		watchLeftControl.classList.remove('hidden-controller');
	}

	if (axisX === 280) {
		watchRightControl.classList.add('hidden-controller');
	} else {
		watchRightControl.classList.remove('hidden-controller');
	}
};

watchTopControl.addEventListener('click', () => {
	watchCases.style.marginTop = `${(axisY -= 70)}rem`;
	hideControl();
});

watchBottomControl.addEventListener('click', () => {
	watchCases.style.marginTop = `${(axisY += 70)}rem`;
	hideControl();
});

watchRightControl.addEventListener('click', () => {
	watchBands.style.marginRight = `${(axisX += 70)}rem`;
	hideControl();
});

watchLeftControl.addEventListener('click', () => {
	watchBands.style.marginRight = `${(axisX -= 70)}rem`;
	hideControl();
});
// End of Section4
