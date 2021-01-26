function solve(inputArr) {
    let products = {};

    for (const sale of inputArr) {
        let [town, product, price] = sale.split(' | ');

        if(!products[product]) {
            products[product] = {town, price: Number(price)};
        } else if (products[product].price > Number(price)) {
            products[product] = {town, price: Number(price)}
        }
    }

    let resultArr = [];
    for (const productName in products) {
        resultArr.push(`${productName} -> ${products[productName].price} (${products[productName].town})`)
    }
    
    return resultArr.join('\n');
}

console.log(solve(
    ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));
