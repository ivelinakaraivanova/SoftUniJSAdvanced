function solve(inputArr) {
    let resultArr = [];

    function processor() {
        return {
            add: (str) => resultArr.push(str),
            remove: (str) => resultArr = resultArr.filter(e => e !== str),
            print: () => console.log(resultArr.join(','))
        }
    }

    let proc = processor();

    inputArr.forEach(element => {
        [act, str] = element.split(' ');
        proc[act](str);
    });
    
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])