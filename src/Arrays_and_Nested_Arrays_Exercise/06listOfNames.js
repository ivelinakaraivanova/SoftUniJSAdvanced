function solve(inputArray) {
    // inputArray.sort((a, b) => a.localeCompare(b));
    // let result = '';
    // for (let i = 0; i < inputArray.length; i++) {
    //     result += `${i+1}.${inputArray[i]}\n`;
    
    // }

    let result = inputArray.sort((a, b) => a.localeCompare(b)).map((name, index) => {
        let resultRow = `${index+1}.${name}`;
        return resultRow;
    })

    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
