function solve(number1, number2, number3) {
    let maxNum;

    if (number1 > number2 && number1 > number3) {
        maxNum = number1;
    } else if (number2 > number1 && number2 > number3) {
        maxNum = number2;
    } else if (number3 > number1 && number3 > number2) {
        maxNum = number3;
    }
    console.log(`The largest number is ${maxNum}.`)
}


solve(5, -3, 16);
solve(-3, -5, -22.5);