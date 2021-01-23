function solve(inputArray) {

    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < inputArray.length; row++) {
        for (let col = 0; col < inputArray[row].length; col++) {
            if (inputArray[row][col] > biggestElement) {
                biggestElement = inputArray[row][col];
            }
        }
    }

    return biggestElement;
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));