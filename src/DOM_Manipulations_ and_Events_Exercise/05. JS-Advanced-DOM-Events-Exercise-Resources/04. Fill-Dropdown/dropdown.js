function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const opt = document.createElement('option');
    opt.textContent = textInput.value;
    opt.value = valueInput.value;

    document.getElementById('menu').appendChild(opt);

    textInput.value = '';
    valueInput.value = '';

}