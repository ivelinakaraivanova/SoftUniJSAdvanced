function solve(num) {
    let sum = 0;
    let digits = [];
    let isSame = true;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        digits.push(digit);
        num = Math.floor(num / 10);
        
    }

    for (let i = 1; i < digits.length; i++) {
        if (digits[i] !== digits[0]) {
            isSame = false;
            break;
        }
    }

    console.log(isSame);
    console.log(sum)
}

solve(2222222);
solve(1234);