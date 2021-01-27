function solve(input) {
    let [header, ...rows] = input.map(splitLine);

    function isNotEmptyString(str) {
        return str !== '';
    }

    function convertIfNum(str) {
        return isNaN(str) ? str : Number(Number(str).toFixed(2));
    }

    function splitLine(str) {
        return str.split('|').filter(isNotEmptyString).map(x => x.trim()).map(convertIfNum);
    }

    return JSON.stringify(rows.map(entry => {
        return header.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }))

}

console.log(solve(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

// console.log(solve(
//     ['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']
// ))