function solve(inputArray) {
    inputArray.sort((a, b) => a-b);
    let resultArr = inputArray.slice(0, 2);
    return resultArr.join(' ');
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));