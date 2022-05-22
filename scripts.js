function createGrid (boxes) {
    for (let i = 0; i < boxes; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < boxes; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        const container = document.getElementById('container');
        container.appendChild(row);
    }
    addDrawFunctionality();
}

function recreateGrid(boxes) {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    })
    createGrid(boxes);
}

function addDrawFunctionality () {
    const squares = document.querySelectorAll('.box');
    squares.forEach(square => {
        square.addEventListener('mousedown', fillSquareClick);
        square.addEventListener('mouseover', fillSquare);
    });
}

window.addEventListener('mousedown', downListener);
window.addEventListener('mouseup', upListener);

let isMouseDown;

function upListener () {
    isMouseDown = false;
}

function downListener () {
    isMouseDown = true;
}

function fillSquare() {
    if (isMouseDown) {
        this.classList.add('color');
    }
}

function fillSquareClick () {
    this.classList.add('color');
}

function clearGrid () {
    const squares = document.querySelectorAll('.box.color');
    squares.forEach(square => {
        square.classList.remove('color');
    })
}


