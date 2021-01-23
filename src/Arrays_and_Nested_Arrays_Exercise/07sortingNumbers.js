function solve(inputArray) {
    inputArray.sort((a, b) => a-b);
    let resultArray = [];
    
    while (inputArray.length) {
        resultArray.push(inputArray.shift());
        if (inputArray.length > 1) {
        resultArray.push(inputArray.pop());
        }
    }
    
    return resultArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
