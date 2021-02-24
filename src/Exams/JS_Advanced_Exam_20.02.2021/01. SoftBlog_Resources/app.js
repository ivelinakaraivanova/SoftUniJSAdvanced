function solve() {
   const [creator, title, category] = Array.from(document.querySelectorAll('input'));
   const content = document.getElementById('content')
   const btnCreate = document.getElementsByTagName('button')[0];
   const postSection = document.querySelector('main>section');
   const olArchive = document.querySelectorAll('aside section')[1].children[1];
   // console.log(olArchive);
   
   btnCreate.addEventListener('click', (e) => {
      e.preventDefault();

      const h1 = document.createElement('h1');
      h1.textContent = title.value;

      const pCategory = document.createElement('p');
      pCategory.textContent = 'Category:';


      const strongCategory = document.createElement('strong');
      strongCategory.textContent = category.value;

      const pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';

      const strongCreator = document.createElement('strong');
      strongCreator.textContent = creator.value;

      const pContent = document.createElement('p');
      pContent.textContent = content.value;

      const divButtons = document.createElement('div');
      divButtons.className = 'buttons';

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btn', 'delete');
      btnDelete.textContent = 'Delete';

      const btnArchive = document.createElement('button');
      btnArchive.classList.add('btn', 'archive');
      btnArchive.textContent = 'Archive';

      creator.value = '';
      content.value = '';
      title.value = '';
      category.value = '';

      const artic = document.createElement('article');

      artic.appendChild(h1);
      pCategory.appendChild(strongCategory);
      artic.appendChild(pCategory);
      pCreator.appendChild(strongCreator);
      artic.appendChild(pCreator);
      artic.appendChild(pContent);
      divButtons.appendChild(btnDelete);
      divButtons.appendChild(btnArchive);
      artic.appendChild(divButtons);
      postSection.appendChild(artic);

      btnArchive.addEventListener('click', () => {
         const li = document.createElement('li');
         li.textContent = h1.textContent;
         olArchive.appendChild(li);
         Array.from(olArchive.children)
        .sort((li1, li2) => li1.textContent.localeCompare(li2.textContent))
        .forEach(liEl => olArchive.appendChild(liEl));
         artic.remove();
      })

      btnDelete.addEventListener('click', () => {
         artic.remove();
      })

   })

}
