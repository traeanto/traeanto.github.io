document.addEventListener('mousemove', parallax);
function parallax(e) {
	this.querySelectorAll('.particle-layer').forEach(function(layer) {
		const speed = layer.getAttribute('data-speed');

		const x = (window.innerWidth + e.pageX*speed)/100;
		const y = (window.innerHeight + e.pageY*speed)/100;

		layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
}

window.addEventListener('scroll', function() {
	let scroll = (window.scrollY/1000)+1;
	console.log(scroll);

	const layer = document.getElementById('header-particle-wrapper');
	layer.style.transform = `scale(${scroll})`;
});
