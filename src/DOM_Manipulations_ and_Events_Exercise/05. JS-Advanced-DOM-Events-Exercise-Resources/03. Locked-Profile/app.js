function lockedProfile() {
    const showMoreBtns = Array.from(document.getElementsByTagName('button'));
    showMoreBtns.forEach(e => e.addEventListener('click', () => {
        let isLocked = e.parentNode.querySelector('input[type=radio]:checked').value==='lock';
        
        if (!isLocked) {
            const details = e.parentNode.children[9];
            const isVisible = details.style.display === 'block';
            details.style.display = isVisible ? 'none' : 'block';
            e.textContent = isVisible ? 'Show more' : 'Hide it';
        }
    }))
   
}