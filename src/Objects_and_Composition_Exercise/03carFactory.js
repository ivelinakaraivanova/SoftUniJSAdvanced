function solve(inputObject) {
    
    function getEngine(power) {
        if (power <= 90) {
            return [90, 1800];
        } else if (power <= 120) {
            return [120, 2400];
        } else if (power <= 200) {
            return [200, 3500];
        }
    }

    let resultObject = {
        model: inputObject.model,
        engine: {
            power: getEngine(inputObject.power)[0],
            volume: getEngine(inputObject.power)[1],
        },
        carriage: {
            type: inputObject.carriage,
            color: inputObject.color,
        },
        wheels: Array(4).fill(inputObject.wheelsize % 2 == 1 ? inputObject.wheelsize : inputObject.wheelsize - 1),
    }

    return resultObject;
}

console.log(solve({ 
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));
console.log(solve({ 
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));