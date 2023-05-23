function mouseParallax(e){
	const layer = document.querySelector('.header-particle-wrapper');
	if(window.scrollY < layer.scrollHeight) {
		this.querySelectorAll('.particle-layer').forEach(function(layer) {
			const speed = layer.getAttribute('data-speed');

			const x = (window.innerWidth + e.pageX * speed) / 100;
			const y = (window.innerHeight + e.pageY * speed) / 100;

			layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	}
}
document.addEventListener('mousemove', mouseParallax);

function particleParallax(){
	const particle = document.querySelector('.header-particle-wrapper');
	if(window.scrollY < particle.scrollHeight) {
		particle.style.transform = `scale(${(window.scrollY / 800) + 1})`;
		particle.style.opacity = `${1 - (window.scrollY / 600)}`;
	}
}

let scrollY = window.scrollY;
function waveParallax(){
	const wave = document.querySelector('.wave-wrapper');
	if(scrollY < window.scrollY){
		wave.style.animationPlayState = `paused`;
	} else {
		wave.style.animationPlayState = `running`;
	}
	scrollY = window.scrollY;
}

window.addEventListener('scroll', function(){
	particleParallax();
	waveParallax();
});

let current = 0;
let target = 0;
let ease = 0.15;
function smoothScroll(){
	current = current * (1 - ease) + target * ease
	current = parseFloat(current.toFixed(2));
	target = window.scrollY;
	
	let mainContainer = document.querySelector('.main')
	mainContainer.style.transform = `translateY(${-current}px)`;
	requestAnimationFrame(smoothScroll);
}

function setupAnimation(){
	let mainContainer = document.querySelector('.main')
	let mainHeight = mainContainer.clientHeight;

	document.body.style.height = `${mainHeight}px`;
	window.onresize = setupAnimation;
}
smoothScroll();
setupAnimation();
