function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', (e) => {
        if (!(/^[a-z]+@[a-z]+\.[a-z]+$/gm.test(e.target.value))) {
            input.className = 'error';
        } else {
            input.removeAttribute('class')
        }
    })
}