function solve(inputArray) {
    
    return inputArray.sort((a, b) => {
        if (a.length !== b.length) { 
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }
    ).join('\n');
}

console.log(solve(['alpha', 'beta', 'gamma']));
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(solve(['test', 'Deny', 'omen', 'Default']));