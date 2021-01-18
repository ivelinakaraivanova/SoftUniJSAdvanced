function solve(number1, number2, operator) {
    number1 = Number(number1);
    number2 = Number(number2);
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 != 0) {
            result = number1 / number2;
        }
            break;
        case '%':
            result = number1 % number2;
            break;
        case '**':
            result = number1 ** number2;
            break;
    }

    console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');