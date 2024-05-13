window.addEventListener('DOMContentLoaded', () => {
	//Navbar
	const menu = document.querySelector('.menu');
	const navbar = document.querySelector('.navbar');
	menu.addEventListener('click', () => {
		navbar.classList.toggle('active');
		menu.classList.toggle('active');
	});
	//End of Navbar

	//Section2 Video
	const video = document.querySelector('video');
	const button = document.querySelector('.buttons i');
	const bar = document.querySelector('.video-bar');
	const playPause = () => {
		if (video.paused) {
			video.play();
			button.className = 'far fa-pause-circle';
			video.style.opacity = '0.9';
		} else {
			video.pause();
			button.className = 'far fa-play-circle';
			video.style.opacity = '0.3';
		}
	};
	button.addEventListener('click', () => {
		playPause();
	});
	video.addEventListener('timeupdate', () => {
		const barWidth = video.currentTime / video.duration;
		bar.style.width = `${barWidth * 100}%`;
		if (video.ended) {
			button.className = 'far fa-play-circle';
			video.style.opacity = '0.3';
		}
	});
	//End of Section2 Video

	// Section 3 Pricing Cards
	let swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 70,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
	});
	// End of Section 3 Pricing Cards
});
