function sumTable() {
    const lastCells = document.querySelectorAll('table tr td:last-child');
    let sum = 0;
    for (let cell of lastCells) {
        sum += Number(cell.textContent);
    }

    document.getElementById('sum').textContent = sum;
}
