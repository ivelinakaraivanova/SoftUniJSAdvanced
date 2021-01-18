function solve(x1, y1, x2, y2) {
    
    function getDistance(a, b, c, d) {
        let distance = Math.sqrt((a - c) ** 2 + (b - d) ** 2);
        return distance;
    }
    
    function checkDistance(a, b, c, d) {
        distance =  getDistance(a, b, c, d);

        let result = '';
        if (Number.isInteger(distance)) {
            result = 'valid';
        } else {
            result = 'invalid'
        }
        return result;
    }
    
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${checkDistance(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${checkDistance(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkDistance(x1, y1, x2, y2)}`);
           
}

// solve(3, 0, 0, 4);
solve(2, 1, 1, 1);