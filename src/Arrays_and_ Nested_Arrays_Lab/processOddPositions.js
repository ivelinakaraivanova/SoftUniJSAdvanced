function solve(inputArray) {
    let resultArray = [];

    for (let i = 1; i <= inputArray.length; i += 2) {
        resultArray.push(inputArray[i] * 2);

    }

    return resultArray.reverse().join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));