function solve(inputArray) {
    let resultArray = [];

    for (const num of inputArray) {
        if (num < 0) {
            resultArray.unshift(num);
        } else {
            resultArray.push(num);
        }
    }

    return resultArray.join('\n');
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));