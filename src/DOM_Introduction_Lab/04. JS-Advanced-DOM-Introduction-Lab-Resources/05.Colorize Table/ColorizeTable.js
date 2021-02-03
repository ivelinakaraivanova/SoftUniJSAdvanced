function colorize() {
    const rows = document.querySelectorAll('table tr');

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].style.background = 'teal';
        }
    }
}

// [...document.querySelectorAll('table tr:nth-child(even'))].forEach(e => e.style.background = 'teal')