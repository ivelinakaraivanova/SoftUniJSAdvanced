function solve(json) {
    
    let arr = JSON.parse(json);
    let outputArr = ['<table>'];
 
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    
    outputArr.push('</table>');

    function makeKeyRow(arr) {
        let result = `  <tr>`;
        for (let key of Object.keys(arr[0])) {
        result += `<th>${escapeHtml(key)}</th>`
        }
        result += `</tr>`;
        return result;
    }

    function makeValueRow(obj) {
        let result = `  <tr>`;
        for (let key of Object.keys(obj)) {
        result += `<td>${(escapeHtml(obj[key]))}</td>`
        }
        result += `</tr>`;
        return result;
    }

    function escapeHtml(value) {
        
        let result = String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
        
        return result;
    }
    
    console.log(outputArr.join('\n'));

}


solve('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]')

solve('[{"Name":"Pesho","Score":4,"Grade":8}, {"Name":"Gosho", "Score":5, "Grade":8}, {"Name":"Angel","Score":5.50,"Grade":10}]')
