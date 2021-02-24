function solve() {
    const [lectureNameField, lectureDateField, module, btnDiv] = Array.from(document.querySelectorAll('.form-control'));
    const btnAdd = btnDiv.children[0];
    const divModules = document.querySelector('.modules');
    let modules = [];
    
    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();

        const lectureName = lectureNameField.children[1].value;
        const lectureDate = lectureDateField.children[1].value;
        const moduleName = module.children[1].value;

        if (lectureName !== ''
            && lectureDate !== ''
            && moduleName !== 'Select module') {

            function createLi(ul) {

                const h4 = document.createElement('h4');
                h4.textContent = `${lectureName} - ${lectureDate.split('-').join('/').split('T').join(' - ')}`;
                

                const btnDel = document.createElement('button');
                btnDel.textContent = 'Del';
                btnDel.className = 'red';
               
                btnDel.addEventListener('click', (e) => {
                    const liLecture = e.target.parentNode;
                    liLecture.remove();

                    if (ul.children.length === 0) { ul.parentNode.remove() }
                });

                const li = document.createElement('li');
                li.className = 'flex';
                li.appendChild(h4);
                li.appendChild(btnDel);
                
                ul.appendChild(li);
                let liArr = Array.from(ul.children)
                .sort((li1, li2) => {
                    let li1Date = li1.children[0].innerText.split(' - ')[1];
                    let li2Date = li2.children[0].innerText.split(' - ')[1];
                    return li1Date.localeCompare(li2Date);
                });
                liArr.forEach(liEl => ul.appendChild(liEl));
                
            }

            if (!modules.includes(module.children[1].value)) {

                const divModule = document.createElement('div');
                divModule.className = 'module';
                divModules.appendChild(divModule);

                const h3 = document.createElement('h3');
                h3.textContent = `${moduleName.toUpperCase()}-MODULE`;
                divModule.appendChild(h3);

                const ul = document.createElement('ul');
                divModule.appendChild(ul);

                createLi(ul);

                modules.push(module.children[1].value);

            } else {
                const ul = document.querySelector('.module').children[1];
                createLi(ul);
            }

            lectureNameField.children[1].value = '';
            lectureDateField.children[1].value = '';
            module.children[1].value = 'Select module';

        }
    })
};