function solve(inputArray) {
    inputArray.sort((a, b) => a - b);
    // let firstHalf = inputArray.slice(0, Math.floor(inputArray.length / 2));
    let secondHalf = inputArray.slice(Math.floor(inputArray.length / 2));

    // if (firstHalf.length <= secondHalf.length) {
    //     return secondHalf;
    // } else {
    //     return firstHalf;
    // }
    return secondHalf;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));