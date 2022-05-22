function createGrid () {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < 16; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        const container = document.getElementById('container');
        container.appendChild(row);
    }
}

function setSize () {
    return;
}