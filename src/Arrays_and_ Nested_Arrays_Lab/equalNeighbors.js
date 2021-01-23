function solve(inputMatrix) {
    let count = 0;

    for (let row = 0; row < inputMatrix.length; row++) {
        for (let col = 0; col < inputMatrix[row].length; col++) {
            let currentElem = inputMatrix[row][col];
            let neighborRight = inputMatrix[row][col+1];
            
            if (currentElem == neighborRight) {
                count += 1;
            }

            if (row < inputMatrix.length - 1) {
                let neighborDown = inputMatrix[row+1][col];
                if (currentElem == neighborDown) {
                    count += 1;
                }
            }
        }
    }

    return count;
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));
// console.log(solve([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]
// ));