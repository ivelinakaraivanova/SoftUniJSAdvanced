function solve(inputArr) {
    let splitArr = inputArr.map(element => element.split(' | '));

    let cars = new Map();

    for (const element of splitArr) {
        const carBrand = element[0];
        const carModel = element[1];
        const producedCars = Number(element[2]);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }

        let models = cars.get(carBrand);

        if (!models.has(carModel)) {
            models.set(carModel, 0);
        }
        models.set(carModel, models.get(carModel) + producedCars);

    }

    for (const brand of cars.keys()) {
        console.log(brand);
        let models = cars.get(brand);
        Array.from(models.entries()).map(e => console.log(`###${e[0]} -> ${e[1]}`))
    }
    
}

solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
)