function solve(inputArray) {
    let towns = {};
    for (let element of inputArray) {
        let splitElement = element.split(' <-> ');
        let name = splitElement[0];
        let population = Number(splitElement[1]);
        if (name in towns) {
            towns[name] += population;
        } else {
            towns[name] = population;
        }
    }

    for (const name in towns) {
        console.log(`${name} : ${towns[name]}`)

    }
}

solve(
    ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
solve(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);