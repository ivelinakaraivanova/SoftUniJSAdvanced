function solve(speed, area) {
    
    let areas = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    let result = '';
    let difference = speed - areas[area];
    let status = '';

    if (difference <= 0) {
        result = `Driving ${speed} km/h in a ${areas[area]} zone`
    } else {
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        result = `The speed is ${difference} km/h faster than the allowed speed of ${areas[area]} - ${status}`
    }

    console.log(result);
}

// solve(40, 'city');
// solve(21, 'residential');
// solve(120, 'interstate');
solve(200, 'motorway');