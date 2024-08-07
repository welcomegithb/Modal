const elbtn = document.querySelector('.BTN');
const elmodal = document.querySelector('.modal');
const elsvg = document.querySelector('svg');
// Modal Open
elbtn.addEventListener('click', () => {
	elmodal.classList.add('open');
	elbtn.classList.add('close');
});

// Modal close
elsvg.addEventListener('click', () => {
	elmodal.classList.remove('open');
	elbtn.classList.remove('close');
});

// Modal Close
elmodal.addEventListener('click', e => {
	if (e.target === elmodal) {
		elmodal.classList.remove('open');
		elbtn.classList.remove('close');
	}
});
// Keyup modal
window.addEventListener('keyup', e => {
	if (e.key === 'Escape') {
		elmodal.classList.remove('open');
		elbtn.classList.remove('close');
	}
});
