
const eleLevel = document.getElementById('level');
const btnPlay = document.getElementById('play');
const eleGrid = document.querySelector('.grid');
const arrLevels = [144, 81, 49];
let bombs;

btnPlay.addEventListener('click', setupGame);


function setupGame() {
	eleGrid.innerHTML = '';

	const indexLevel = parseInt(eleLevel.value);
	const cellsCount = arrLevels[indexLevel];
	const cellsPerRow = Math.sqrt(cellsCount);

	for (let cellNum = 1; cellNum <= cellsCount; cellNum++){
		const eleCell = document.createElement('div');
		eleCell.classList.add('cell');
		eleCell.innerHTML = cellNum;
		eleCell.style.width = `calc(100% / ${cellsPerRow})`;
		eleCell.style.height = `calc(100% / ${cellsPerRow})`;
		eleCell.addEventListener('click', changeCellColor);
		eleGrid.append(eleCell);
	}
}

function changeCellColor(event) {
	this.classList.add('selected');
}

