document.addEventListener('mousemove', function(e){
	const layer = document.querySelector('.header-particle-wrapper');
	if(window.scrollY < layer.offsetHeight) {
		this.querySelectorAll('.particle-layer').forEach(function(layer) {
			const speed = layer.getAttribute('data-speed');

			const x = (window.innerWidth + e.pageX*speed)/100;
			const y = (window.innerHeight + e.pageY*speed)/100;

			layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	}
})

window.addEventListener('scroll', function() {
	const layer = document.querySelector('.header-particle-wrapper');
	if(window.scrollY < layer.offsetHeight) {
		scroll = (window.scrollY / 1000) + 1;
		
		layer.style.transform = `scale(${scroll})`;
	}
})
