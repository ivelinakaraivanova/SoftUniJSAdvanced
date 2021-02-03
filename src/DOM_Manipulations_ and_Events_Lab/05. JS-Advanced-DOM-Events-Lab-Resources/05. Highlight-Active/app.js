function focus() {
    // select all input fields
    // add listener for focus event
    // add listener for blur element
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    })
    

    // onFocus -> select input parent -> apply class 'focused'
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }
    
    // onBlur -> select input parent -> remove class 'focus'
    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
    // console.log();
}