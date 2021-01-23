function solve(matrix) {
    let result = matrix.reduce(matrixReducer);

function matrixReducer(acc, c) {
    return acc.concat(c);
}

    console.log(result);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )