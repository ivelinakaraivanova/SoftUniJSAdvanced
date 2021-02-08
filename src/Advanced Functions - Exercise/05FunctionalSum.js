function add(num1) {
    let sum = 0;
    sum += num1;

    function inner(num2) {
        sum += num2;
        return inner;
    }

    inner.toString = () => sum;
    
    return inner;
}

console.log(add(1));
console.log(add(1)(6)(-3));