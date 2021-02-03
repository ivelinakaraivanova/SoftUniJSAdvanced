function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = createEl('li', input.value);

    if (input.length === 0) return;

    const deleteBtn = createEl('a', '[Delete]');
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove()
    })

    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    input.value = '';

    function createEl(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
