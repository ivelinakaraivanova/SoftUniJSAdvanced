function solve(fruitType, weightInGrams, pricePerKilo) {
    let weightInKilo = weightInGrams / 1000;
    let totalPrice = weightInKilo * pricePerKilo;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruitType}.`)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);