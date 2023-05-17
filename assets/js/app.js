function lerp(start, end, t){
	return start * (1 - t) + end * t;
}

let current = 0;
let target = 0;
function smoothScroll(){
	current = lerp(current, target, 0.15);
	current = parseFloat(current.toFixed(2));
	target = window.scrollY;
	
	let mainContainer = document.querySelector('.main')
	mainContainer.style.transform = `translateY(${-current}px)`;
	requestAnimationFrame(smoothScroll);
}

function setupAnimation(){
	let mainContainer = document.querySelector('.main')
	let mainWidth = mainContainer.getBoundingClientRect().height;

	document.body.style.height = `${mainWidth}px`;
	smoothScroll();
}
setupAnimation()
