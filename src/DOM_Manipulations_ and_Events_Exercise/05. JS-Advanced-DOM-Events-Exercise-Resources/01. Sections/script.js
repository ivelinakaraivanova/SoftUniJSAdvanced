function create(words) {
   const divContent = document.getElementById('content');

   words.forEach(element => {
      const divElement = document.createElement('div');
      const parElement = document.createElement('p');
      parElement.textContent = element;
      parElement.style.display = 'none';
      divElement.appendChild(parElement);
      divElement.addEventListener('click', () => {
         parElement.style.display = 'block';
      });
      divContent.appendChild(divElement);
   });
   // console.log(divContent);
}