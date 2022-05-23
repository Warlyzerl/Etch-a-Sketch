const container = document.getElementById('container');
let boxes = 16;

function createGrid () {
    for (let i = 0; i < boxes; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < boxes; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    addDrawFunctionality();
}

const recreateButton = document.querySelector('.change-size');
recreateButton.addEventListener('click', recreateGrid);

function recreateGrid() {
    boxes = prompt("Enter the number of boxes per row/column you want. We recommend 50 or less.")
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    })
    createGrid();
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid);

function clearGrid () {
    const squares = document.querySelectorAll('.box');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
}



let isMouseDown;
window.addEventListener('mousedown', downListener);
window.addEventListener('mouseup', upListener);

function upListener () {
    isMouseDown = false;
}

function downListener () {
    isMouseDown = true;
}

function addDrawFunctionality () {
    const squares = document.querySelectorAll('.box');
    squares.forEach(square => {
        square.addEventListener('mousedown', fillSquareClick);
        square.addEventListener('mouseover', fillSquare);
    });
}

let boxColor = 'black';
const changeColor = document.querySelector('.color');
changeColor.addEventListener('click', setColor);
function setColor () {
    boxColor = prompt("Enter a color you want to use like 'yellow' or 'blue'. Just don't enter something dumb like 'Seafoam Green' or 'Naruto Hair Orange'").toLowerCase();
}

function fillSquare() {
    if (isMouseDown) {
        this.style.backgroundColor = boxColor;
    }
}

function fillSquareClick () {
    this.style.backgroundColor = boxColor;
}

const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', eraserToggle);
let isOn = false;
let tempColor;
function eraserToggle () {
    if (!isOn) {
        isOn = true;
        this.classList.add('gray');
        tempColor = boxColor;
        boxColor = 'white';
    }
    else {
        isOn = false;
        this.classList.remove('gray');
        boxColor = tempColor;

    }
}







