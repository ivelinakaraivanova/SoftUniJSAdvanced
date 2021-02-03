function deleteByEmail() {
    const input = document.getElementsByName('email')[0].value;

    const lastColumn = Array.from(document.querySelectorAll('table tr td:last-child'));

    for (const cell of lastColumn) {
        if (cell.textContent == input) {
            let rowToDelete = cell.parentNode;
            rowToDelete.parentNode.removeChild(rowToDelete);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }

    document.getElementById('result').textContent = 'Not found.';

}


// const input = document.querySelector('input[name="email"]').value;


// move the last element from the first list to last element of the second list:
// ------------------------------------------------------------------------------
// const liElement = document.querySelectorAll('ul')[0].children[2];
// document.querySelectorAll('ul')[1].appendChild(liElement);

// sort of number list:
// ----------------------
// const someList = [...document.querySelectorAll('li')];
// const ul = document.querySelector('ul');
// someList.sort((a, b) => Number(a.textContent) - Number(b.textContent));
// someList.forEach(li => ul.appendChild(li));
