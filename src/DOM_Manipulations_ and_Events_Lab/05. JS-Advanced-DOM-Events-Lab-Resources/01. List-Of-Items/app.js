function addItem() {
    let input = document.getElementById('newItemText').value;
    const ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = input;
    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = '';

    // console.log(ulElement);
}