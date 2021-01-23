function solve(inputArray, num) {
    for (let i = 0; i < num; i++) {
    inputArray.unshift(inputArray.pop());
    }

    return inputArray.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));
