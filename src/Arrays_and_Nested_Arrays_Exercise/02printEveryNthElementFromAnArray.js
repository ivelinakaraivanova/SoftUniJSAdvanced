function solve(inputArray, num) {
    let resultArray = [];
    for (let i = 0; i < inputArray.length; i+=num){
        resultArray.push(inputArray[i]);
    }
    return resultArray;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));
console.log(solve(['1', '2', '3', '4', '5'], 6));