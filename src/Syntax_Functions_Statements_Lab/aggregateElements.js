function solve(input) {
    let sum = 0;
    let recSum = 0;
    let concat = '';

    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
        recSum += 1 / Number(input[i]);
        concat += String(input[i]);
    }

    console.log(sum);
    console.log(recSum);
    console.log(concat);
}

// function solve(input) {
//     console.log(reduce(input, (acc, c) => acc + c, 0));
//     console.log(reduce(input, (acc, c) => acc + 1/c, 0));
//     console.log(reduce(input, (acc, c) => acc + c, ''));


//     function reduce(arr, operator, initialValue) {
//         let current = initialValue;

//         for (let i = 0; i < input.length; i++) {
//             current = operator(current, arr[i]);
//         }

//         return current;
//     }
// }

solve([1, 2, 3]);
solve([2, 4, 8, 16])