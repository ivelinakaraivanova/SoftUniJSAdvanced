function solve(inputArray) {
    // let resultArray = [];
    
    //     for (let i = 0; i < inputArray.length; i++){
    //         let currentEl = inputArray[i];
    //         if (currentEl >= resultArray[resultArray.length-1] || i == 0) {
    //             resultArray.push(currentEl);
    //         }
    //     }
    
    // return resultArray;

    return inputArray.reduce(function(resultArray, currentEl, index, initialArray){
        if (currentEl >= resultArray[resultArray.length-1] || resultArray.length === 0) {
            resultArray.push(currentEl);
        }
        return resultArray;
    }, [])

}

// console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));