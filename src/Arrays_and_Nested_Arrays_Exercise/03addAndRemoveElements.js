function solve(inputArray) {
    let resultArray = [];
    let number = 1;
    
    for (let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case 'add':
                resultArray.push(number);
                break;
            case 'remove':
                resultArray.pop();
                break;
        }
         
        number++;
    }
    return resultArray.length > 0 ? resultArray.join('\n') : 'Empty';
}

// console.log(solve(['add', 'add', 'add', 'add']));
// console.log(solve(['add', 'add', 'remove', 'add', 'add']));
console.log(solve(['remove', 'remove', 'remove']));