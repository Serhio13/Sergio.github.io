// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {

	const images = [...document.querySelectorAll('.banner__slider-img')]
	const left = document.querySelector('#left');
	const right = document.querySelector('#right');
	const number = document.querySelector('.banner__pagination-number');

	let el = 0
	images.forEach((el, i) => {
		if (i === 0) {
			el.classList.add('active')
		}
	})
	number.textContent = el

	function changeSlide() {
		images.forEach((el) => {
			el.classList.remove('active')
		})
		images[el].classList.add('active')
		number.textContent = el
	}

	left.addEventListener('click', (event) => {
		if (!event.isTrusted) return;
		const target = event.target;
		el = el - 1
		changeSlide()
		
	})

	right.addEventListener('click', (event) => {
		if (!event.isTrusted) return;
		const target = event.target;
		el = el + 1
		changeSlide()
	})

})
