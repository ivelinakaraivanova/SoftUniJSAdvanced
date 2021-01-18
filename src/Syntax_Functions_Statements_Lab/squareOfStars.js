function solve(number = 5) {
    if (number != NaN) {
        for (let i = 1; i <= number; i++) {
            console.log('* '.repeat(number));
        }
    }

}

solve(2);
solve();