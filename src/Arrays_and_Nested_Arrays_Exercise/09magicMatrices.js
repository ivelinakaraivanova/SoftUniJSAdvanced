function solve(inputArray) {
    let isSame = true;
    let SumsArray = [];
    
    for (let row = 0; row < inputArray.length; row++) {
        let rowSum = 0;
        for (let col = 0; col < inputArray[row].length; col++) {
            rowSum += inputArray[row][col];
        }
        SumsArray.push(rowSum);
    }

    for (let row = 0; row < inputArray.length; row++) {
        let colSum = 0;
        for (let col = 0; col < inputArray[row].length; col++) {
            colSum += inputArray[col][row];
        }
        SumsArray.push(colSum);
    }

    for (let i = 0; i < SumsArray.length-1; i++) {
        if (SumsArray[i] !== SumsArray[i+1]) {
            isSame = false;
            break;
        }
    }
    
    return isSame;

}

// console.log(solve(
//     [[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]
//    ));
console.log(solve(
    [[0, 1, 1],
    [1, 1],
    [1, 0, 1]]
   ));
// console.log(solve(
//     [[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
// ))