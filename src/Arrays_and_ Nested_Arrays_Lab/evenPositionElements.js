function solve(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result += input[i] + ' ';
        }
    }
    return result;
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));