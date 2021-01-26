function solve(inputArr) {
    inputArr.sort((a, b) => a.localeCompare(b));
    
    let resultObj = {};

    for (const token of inputArr) {
        let initial = token[0];
        let [product, price] = token.split(' : ');
        let newToken = `${product}: ${price}`
        if (!resultObj[initial]) {
            resultObj[initial] = [newToken];
        } else {
            resultObj[initial].push(newToken)
        }
    }
    let result = '';
    for (const letter in resultObj) {
        result += `${letter}\n`;
        for (let product of resultObj[letter]) {
            result += `  ${product}\n`
        }
    }
    
    return result;
}

console.log(solve(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));
// console.log(solve(
//     ['Banana : 2',
//     "Rubic's Cube : 5",
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']

// ));