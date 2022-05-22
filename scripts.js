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
}

function setSize (row, box) {
    
}