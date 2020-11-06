const container = document.getElementById('container');
const circlesArr = [];
const soundsArr = [];
const tracks = [
	'/sounds/waves-sound-1.wav',
	'/sounds/waves-sound-2.mp3',
	'/sounds/waves-sound-3.mp3'
]
let rows = 15;
let cols = 15;

for (let i = 0; i < cols; i++) {
	circlesArr[i] = [];
	soundsArr[i] = []

	for (let j = 0; j < rows; j++) {
		const circle = document.createElement('div');
		circle.classList.add('circle');
		container.appendChild(circle);
		circlesArr[i].push(circle);	

		const sound = document.createElement('audio');
		sound.classList.add('sound')
		circle.appendChild(sound)
		soundsArr[i].push(sound)
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
			setTimeout(() => {
				growCircles(i-1, j)
				growCircles(i+1, j)
				growCircles(i, j-1)
				growCircles(i, j+1)
			}, 100)
			
			setTimeout(() => {
				circlesArr[i][j].classList.remove('grow');
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
	}, 3550)
}
