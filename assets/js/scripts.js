document.addEventListener('mousemove', function(e){
	const layer = document.querySelector('.header-particle-wrapper');
	if(window.scrollY < layer.scrollHeight) {
		this.querySelectorAll('.particle-layer').forEach(function(layer) {
			const speed = layer.getAttribute('data-speed');

			const x = (window.innerWidth + e.pageX * speed) / 100;
			const y = (window.innerHeight + e.pageY * speed) / 100;

			layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	}
})

let scrollY = window.scrollY;
window.addEventListener('scroll', function() {
	const particle = document.querySelector('.header-particle-wrapper');
	if(window.scrollY < particle.scrollHeight) {
		particle.style.transform = `scale(${(scrollY / 800) + 1})`;
	}

	const wave = document.querySelector('.wave-wrapper');
	if(scrollY < window.scrollY){
		wave.style.animationPlayState = `paused`;
	} else {
		wave.style.animationPlayState = `running`;
	}
	scrollY = window.scrollY;
})
