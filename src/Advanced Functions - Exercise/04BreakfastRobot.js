function solution() {

    const recipes = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        }
    }

    let ingredients = {
        'carbohydrate': 0,
        'flavour': 0,
        'fat': 0,
        'protein': 0
    };

    let isSuccessful = true;
    let ingrNotEnough = '';

    function restock(ing, quantity) {
        ingredients[ing] += quantity;

    }

    function prepare(recipe, quantity) {
        for (const [ingr, quant] of Object.entries(recipes[recipe])) {
            if (quant * quantity > ingredients[ingr]) {
                isSuccessful = false;
                ingrNotEnough = ingr;
                break;
            } else {
                isSuccessful = true;
            }
        };

        if (isSuccessful) {
            for (const [ingr, quant] of Object.entries(recipes[recipe])) {
                ingredients[ingr] -= quant * quantity;
            }
        }
    }

    function report() {
        const ingred = ['protein', 'carbohydrate', 'fat', 'flavour'];
        let result = ingred.map(e => `${e}=${ingredients[e]}`);
        return result.join(' ');
    }

    commands = {
        restock,
        prepare,
        report
    };




    let manager = (input) => {

        const tokens = input.trim().split('\n').map(element => element.trim().split(' '));

        let resultArr = [];
        let resultStr = '';

        tokens.forEach(el => {
            const command = el[0];
            if (el.length > 1) {
                const prod = el[1];
                const quantity = Number(el[2]);
                if (command == 'prepare') {
                    commands[command](prod, quantity);
                    if (isSuccessful) {
                        resultStr = 'Success';
                    } else {
                        resultStr = `Error: not enough ${ingrNotEnough} in stock`;
                    }
                } else if (command == 'restock') {
                    commands[command](prod, quantity);
                    resultStr = 'Success';
                }
            } else {
                resultStr = commands[command]();
            }
            resultArr.push(resultStr);
        })

        return resultArr.join('\n');

    }

    return manager;

}

// console.log(solution(`restock carbohydrate 10
//     restock flavour 10
//     prepare apple 1
//     restock fat 10
//     prepare burger 1
//     report`

// ))

console.log(solution(
    `prepare turkey 1
    restock protein 10
    prepare turkey 1
    restock carbohydrate 10
    prepare turkey 1
    restock fat 10
    prepare turkey 1
    restock flavour 10
    prepare turkey 1
    report`
))