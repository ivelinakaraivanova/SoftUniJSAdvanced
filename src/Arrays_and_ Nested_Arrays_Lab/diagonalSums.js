function solve(inputMatrix) {
    let firstDiagonalSum = 0;
    let seconfDiagonalSum = 0;

    for (let i = 0; i < inputMatrix.length; i++) {
        firstDiagonalSum += inputMatrix[i][i];
        seconfDiagonalSum += inputMatrix[i][inputMatrix.length - i - 1];
    }

    return [firstDiagonalSum, seconfDiagonalSum].join(' ');
}

console.log(solve([
    [20, 40],
    [10, 60]]
   ));
console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ));