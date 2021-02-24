function solve(inputArr) {
    let splitArr = inputArr.map(element => element.split(' => '));

    let bottles = new Map();
    let juices = new Map();

    for (const element of splitArr) {
        const fruit = element[0];
        const quantity = Number(element[1]);
        
        if (juices.has(fruit)) {
            juices.set(fruit, juices.get(fruit)+quantity);
        } else {
            juices.set(fruit, quantity);
        }

        if (juices.get(fruit) >= 1000) {
            const btlquantity = Math.floor(juices.get(fruit)/1000);
            const remained = juices.get(fruit) % 1000;

            if (bottles.has(fruit)) {
                bottles.set(fruit, bottles.get(fruit)+btlquantity);
            } else {
                bottles.set(fruit, btlquantity)
            }

            juices.set(fruit, remained);
        }
    }

    let result = Array.from(bottles.entries()).map(e => `${e[0]} => ${e[1]}`).join('\n');
    
    return result;
}

console.log(solve(
        ['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']
))

console.log(solve(
        ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
))