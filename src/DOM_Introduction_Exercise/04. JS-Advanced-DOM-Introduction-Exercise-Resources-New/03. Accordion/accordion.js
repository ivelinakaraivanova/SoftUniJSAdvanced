function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');
    extra.style.display = extra.style.display !== 'block' ? 'block' : 'none';
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';

    console.log(extra);
}