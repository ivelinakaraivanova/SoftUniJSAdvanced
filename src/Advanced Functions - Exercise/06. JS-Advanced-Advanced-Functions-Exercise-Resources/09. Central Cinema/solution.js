function solve() {

    const btnOnScreen = document.getElementById('container').getElementsByTagName('button')[0];
    const ul = document.getElementById('movies').children[1];

    const btnClear = document.querySelector('#archive>button');
    btnClear.addEventListener('click', (e) => {
        let listToDelete = Array.from(e.target.parentNode.children[1].children);
        listToDelete.map(e => e.remove());
    });

    function archive(e) {
        const ul = document.querySelector('#archive>ul');
        const liMovie = e.target.parentNode.parentNode;
        const spanMovie = liMovie.children[0].textContent;
        const ticketMoviePrice = Number(liMovie.children[2].children[0].textContent);
        const ticketCount = liMovie.children[2].children[1].value;
        
        if ((typeof (Number.parseInt(ticketCount)) === 'number' && ticketCount !== '' && !Number.isNaN(Number(ticketCount)))) {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = spanMovie;

            const strongTotalAmount = document.createElement('strong');
            strongTotalAmount.textContent = `Total amount: ${(ticketMoviePrice * Number(ticketCount)).toFixed(2)}`;

            const btnDelete = document.createElement('button');
            if (btnDelete) {
                btnDelete.textContent = 'Delete';
                btnDelete.addEventListener('click', (e) => {
                    const liArhMovie = e.target.parentNode;
                    liArhMovie.remove();
                })
            };

            li.appendChild(span);
            li.appendChild(strongTotalAmount);
            li.appendChild(btnDelete);
            ul.appendChild(li)

        }

        liMovie.remove();
    }

    btnOnScreen.addEventListener('click', (e) => {
        e.preventDefault();
        const inputs = document.getElementById('container').getElementsByTagName('input');
        const movieName = inputs[0].value;
        const hall = inputs[1].value;
        const ticketPrice = Number(inputs[2].value);

        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        if (movieName && hall && ticketPrice) {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = movieName;

            const strongHall = document.createElement('strong');
            strongHall.textContent = `Hall: ${hall}`;

            const div = document.createElement('div');
            const strongPrice = document.createElement('strong');
            strongPrice.textContent = ticketPrice.toFixed(2);

            const inputPrice = document.createElement('input');
            inputPrice.setAttribute('placeholder', 'Tickets Sold');

            const btnArchive = document.createElement('button');
            if (btnArchive) {
                btnArchive.textContent = 'Archive';
                btnArchive.addEventListener('click', archive);
            };


            div.appendChild(strongPrice);
            div.appendChild(inputPrice);
            div.appendChild(btnArchive);
            li.appendChild(span);
            li.appendChild(strongHall);
            li.appendChild(div);
            ul.appendChild(li)

        }

    });

}