function solve(num, ...opers) {
    
    function operator(x, operation) {
        let result;
        switch (operation) {
            case 'chop':
                result = x / 2;
                break;
            case 'dice': 
                result = Math.sqrt(x);
                break;
            case 'spice': 
                result = x + 1;
                break;
            case 'bake': 
                result = x * 3;
                break;
            case 'fillet': 
                result = x * 0.8;
                break;
        }

        return result;
    }

    let initialArray = [];

    for (let i = 0; i < opers.length; i++) {
        initialArray.push(opers[i])
    }

    let res = Number(num);

    for (let i = 0; i < initialArray.length; i++) {
        res = operator(res, initialArray[i]);
        console.log(res);
    }
    
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');