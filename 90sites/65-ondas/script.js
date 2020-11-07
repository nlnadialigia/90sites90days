const container = document.getElementById('container');
const circlesArr = [];
const soundsArr = [];
const tracks = [
	'/sounds/1.wav',
	'/sounds/2.wav',
	'/sounds/3.wav',
	'/sounds/4.wav',
	'/sounds/5.wav',
	'/sounds/6.wav',
	'/sounds/7.wav',
	'/sounds/8.wav',
	'/sounds/9.wav',
	'/sounds/10.wav',
	'/sounds/11.wav',
	'/sounds/12.wav',
	'/sounds/13.wav',
	'/sounds/14.wav',
	'/sounds/15.wav',
	'/sounds/16.wav',
	'/sounds/17.wav',
	'/sounds/18.wav',
	'/sounds/19.wav',
	'/sounds/20.wav',
	'/sounds/21.wav',
	'/sounds/22.wav',
	'/sounds/23.wav',
	'/sounds/24.wav',
	'/sounds/25.wav',
	'/sounds/26.wav',
	'/sounds/27.wav',
	'/sounds/28.wav',
	'/sounds/29.wav',
	'/sounds/30.wav',
];
let rows = 15;
let cols = 15;

for(let i=0; i<cols; i++) {
	circlesArr[i] = [];
	soundsArr[i] = []
	for(let j=0; j<rows; j++) {
		const circle = document.createElement('div');
		circle.classList.add('circle');
		container.appendChild(circle);
		circlesArr[i].push(circle);	
		const sound = document.createElement('audio');
		sound.classList.add('sound');
		circle.appendChild(sound);
		soundsArr[i].push(sound);
	}
}

circlesArr.forEach((cols, i) => {
	cols.forEach((circle, j) => {
		circle.addEventListener('click', () => {
			playAudio()
			growCircles(i, j);			
		});
	});
});

function growCircles(i, j) {
	
	if(circlesArr[i] && circlesArr[i][j]) {
		if(!circlesArr[i][j].classList.contains('grow')) {
			circlesArr[i][j].classList.add('grow');
			const bgColor = document.querySelectorAll('.grow')		
			pickedColor = dynamicColors()
			bgColor.forEach(color => {				
				color.style.backgroundColor = pickedColor
			});
			setTimeout(() => {				
				growCircles(i-1, j)
				growCircles(i+1, j)
				growCircles(i, j-1)
				growCircles(i, j+1)
			}, 200)
			
			setTimeout(() => {
				circlesArr[i][j].classList.remove('grow');
				bgColor.forEach(color => {				
					color.style.backgroundColor = "#fff"
				});
			}, 500);
		}
	}
}

function playAudio() {
	const audio = document.querySelector('.sound')
	let track = tracks[Math.floor(Math.random() * tracks.length)];
	setTimeout(() => {
		audio.src = track;
		audio.play()
	}, 0)

	setTimeout(() => {
		audio.pause()
	}, 3550);
}

function dynamicColors() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	let color = `rgb(${r},${g},${b})`
	return color;
}
