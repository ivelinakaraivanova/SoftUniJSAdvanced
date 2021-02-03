function generateReport() {
    const header = document.querySelectorAll('table thead th input');
    
    const headers = Array.from(header).map(e => head = {name: e.name, checked: e.checked});
        
    const rows = Array.from(document.querySelectorAll('table tbody tr'));
    
    let result = 
        rows.map(
            row => Object.assign(
                {},
                ...Array.from(row.children)
                .map((e, i) => ({[headers[i].name]: e.textContent}))
                .filter((_, i) => headers[i].checked)
            )
        );
    
    let resultJson = JSON.stringify(result);
        
    document.getElementById('output').textContent = resultJson; 
}