function solve(inputArr) {
    let resultArr = [];
    let notEnoughOperands = false;

    function isNumeric(num) {
        return !isNaN(num)
    }

    function operation(num1, num2, operator) {
        let result = 0;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        return result;
    }

    function calculate(arr, operator) {
        if (arr.length == 1) {
            console.log('Error: not enough operands!')
            notEnoughOperands = true;
        } else {
            let previous = arr[arr.length - 2];
            let last = arr[arr.length - 1];
            arr.splice(arr.length - 1, 1, operation(previous, last, operator));
            arr.splice(arr.length - 2, 1)
        }
    }

    while (inputArr.length) {
        let current = inputArr.shift()
        if (isNumeric(current)) {
            resultArr.push(current);
        } else {
            calculate(resultArr, current);
        }
    }

    if (resultArr.length >= 2) {
        console.log('Error: too many operands!')
    } else if (resultArr.length === 1 && !notEnoughOperands) {
        console.log(String(resultArr));
    }
}

// solve([3, 4, '+'])
// solve([5, 3, 4, '*', '-'])
solve([7, 33, 8, '-'])
// solve([15, '/'])
// solve([31, 2, '+', 11, '/'])