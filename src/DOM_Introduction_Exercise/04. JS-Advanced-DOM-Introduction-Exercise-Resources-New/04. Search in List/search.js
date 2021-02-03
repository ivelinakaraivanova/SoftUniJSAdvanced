function search() {
   let townsList = document.querySelectorAll('ul#towns li');
   let inputField = document.getElementById('searchText').value;

   let matchesCount = 0;

   for (const town of townsList) {
      if (town.textContent.toLowerCase().includes(inputField.toLowerCase())) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = "underline";
         matchesCount += 1;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }
   let result = `${matchesCount} matches found`;

   document.getElementById('result').textContent = result;

   // console.log(townsList);
}
