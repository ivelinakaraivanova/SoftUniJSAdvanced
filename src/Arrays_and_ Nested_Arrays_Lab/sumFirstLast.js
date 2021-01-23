function solve(inputArray) {
    let firstElement = Number(inputArray[0]);
    let lastElement = Number(inputArray[inputArray.length-1]);
    let result = firstElement + lastElement;

    return result;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));