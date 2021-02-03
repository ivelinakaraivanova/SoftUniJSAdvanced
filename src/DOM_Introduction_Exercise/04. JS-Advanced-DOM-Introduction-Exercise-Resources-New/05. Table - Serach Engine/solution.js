function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rows = document.querySelectorAll('table tbody tr')
      const inputField = document.getElementById('searchField').value;

      for (const row of rows) {
         if (row.textContent.toLowerCase().includes(inputField.toLowerCase())) {
            row.classList.add('select');
         } else {
            row.removeAttribute('class');
         }

      }

   }
}