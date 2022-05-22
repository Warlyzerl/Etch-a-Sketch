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

function addDrawFunctionality () {
    const squares = document.querySelectorAll('.box');
    squares.forEach(square => {
        
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
    if (isMouseDown == true) {
        this.classList.toggle('color');
    }
}
