function solve() {
  const textareas = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');

  buttons[0].addEventListener('click', () => {
    const inputArr = JSON.parse(textareas[0].value);
    inputArr.map(e => {
      const row = document.createElement('tr');
            
      const cellImage = document.createElement('td');
      const img = document.createElement('img');
      img.setAttribute('src', e.img);
      cellImage.appendChild(img);

      const cellName = document.createElement('td');
      const parName = document.createElement('p');
      parName.textContent = e.name;
      cellName.appendChild(parName);

      const cellPrice = document.createElement('td');
      const parPrice = document.createElement('p');
      parPrice.textContent = e.price;
      cellPrice.appendChild(parPrice);

      const cellDecFactor = document.createElement('td');
      const parDecFactor = document.createElement('p');
      parDecFactor.textContent = e.decFactor;
      cellDecFactor.appendChild(parDecFactor);

      const cellMark = document.createElement('td');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      cellMark.appendChild(input);

      row.appendChild(cellImage);
      row.appendChild(cellName);
      row.appendChild(cellPrice);
      row.appendChild(cellDecFactor);
      row.appendChild(cellMark);
      
      document.querySelector('tbody').appendChild(row);

    })

  })

  buttons[1].addEventListener('click', () => {
    const shoppingList = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    .map(f => f.parentNode.parentNode);
    
    const bought = {
      furnitures: [],
      totalPrice: 0,
      totalDecFactor: 0
    }

    shoppingList.map(f => {
      const cells = f.children;

      const name = cells[1].firstChild.textContent;
      bought.furnitures.push(name);

      const price = Number(cells[2].firstChild.textContent);
      bought.totalPrice += price;

      const decFactor = Number(cells[3].firstChild.textContent);
      bought.totalDecFactor += decFactor;
    })

    textareas[1].value = `Bought furniture: ${bought.furnitures.join(', ')}\n`;
    textareas[1].value += `Total price: ${bought.totalPrice.toFixed(2)}\n`;
    textareas[1].value += `Average decoration factor: ${bought.totalDecFactor / bought.furnitures.length}`
         
  })

}