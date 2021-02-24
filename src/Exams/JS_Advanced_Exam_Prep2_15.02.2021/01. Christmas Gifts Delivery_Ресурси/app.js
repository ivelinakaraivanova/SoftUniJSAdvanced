function solution() {
    const [ulListGifts, ulSentGifts, ulDiscGifts] = document.querySelectorAll('ul');
    const input = document.getElementsByTagName('input')[0];
    const btnAdd = document.getElementsByTagName('button')[0];

    btnAdd.addEventListener('click', () => {

        const liGifts = document.createElement('li');
        liGifts.className = 'gift';
        liGifts.textContent = input.value;

        input.value = '';

        const btnSend = document.createElement('button');
        btnSend.textContent = 'Send';
        btnSend.setAttribute("id", "sendButton");

        const btnDiscard = document.createElement('button');
        btnDiscard.textContent = 'Discard';
        btnDiscard.setAttribute("id", "discardButton");

        liGifts.appendChild(btnSend);
        liGifts.appendChild(btnDiscard);
        ulListGifts.appendChild(liGifts);

        Array.from(ulListGifts.children)
        .sort((li1, li2) => li1.textContent.localeCompare(li2.textContent))
        .forEach(liEl => ulListGifts.appendChild(liEl));

        btnSend.addEventListener('click', (e) => {
            e.target.remove();
            btnDiscard.remove();
            ulSentGifts.appendChild(liGifts);

        })

        btnDiscard.addEventListener('click', (e) => {
            e.target.remove();
            btnSend.remove();
            ulDiscGifts.appendChild(liGifts);
        })
    })
}

/*
function el(type, content, className) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
        result.className = className;
    }
    return result;
}
*/