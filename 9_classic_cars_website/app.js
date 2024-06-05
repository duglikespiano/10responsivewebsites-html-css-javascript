document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((element) => {
		element.classList.toggle('active');
	});
});

document.querySelectorAll('.container').forEach((element) => {
	element.addEventListener('click', () => {
		document.querySelectorAll('.target').forEach((element) => {
			element.classList.remove('active');
		});
	});
});

const videos = document.querySelectorAll('.video');
videos.forEach((element) => {
	element.addEventListener('mouseover', () => {
		element.play();
	});
	element.addEventListener('mouseout', () => {
		element.pause();
	});
});
