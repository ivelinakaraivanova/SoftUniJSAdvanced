function solve(inputArr, str) {

    function sorting() {
        return {
            'asc': (arr) => arr.sort((a,b) => a-b),
            'desc': (arr) => arr.sort((a, b) => b-a)
        }
    }

    return sorting()[str](inputArr);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
console.log(solve([14, 7, 17, 6, 8], 'desc'))
