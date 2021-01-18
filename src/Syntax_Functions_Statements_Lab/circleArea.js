function solve(input) {
    if (typeof(input) == 'number') {
        let circleArea = input ** 2 * Math.PI;
        console.log(`${circleArea.toFixed(2)}`);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
    }
}

solve(5);
solve('name');