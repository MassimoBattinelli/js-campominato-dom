const areaSquare = document.querySelector(".cont-square");

for (let i = 1; i <= 100; i++) {
    let numero = i;
    let backcol = 'colorcells'

    areaSquare.innerHTML += `
        <div class="box ${backcol}">${numero}</div>`;
}

let difficultyElem = document.getElementById("nav2");
let playBtn = document.getElementById("button-play");
let cellNumber = [49,81,100];
let bombs;

