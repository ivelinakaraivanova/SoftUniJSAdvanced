class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        const type = product[0]
        const price = product[1];
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        const { recipeName, productsList} = recipe;
        if (!productsList.every(p => this.products.includes(p))) {
            throw new Error('We do not have this product');
        }

        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(recipe => recipe.recipeName == dish)) {
            throw new Error('We do not have this dish');
        }

        if (this.guests[name]) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let resultArr = [];
        let result = '';
        for (const [guest, dish] of Object.entries(this.guests)) {
            result = `${guest} will eat ${dish}, which consists of ${this.dishes.filter(e => e.recipeName==dish)[0].productsList.join(', ')}`
            resultArr.push(result);
        }

        return resultArr.join('\n');
    }

}




let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});

dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
// console.log(dinner.dishes)
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
// console.log(dinner.guests);

console.log(dinner.showAttendance());

// set budget(value) {
//     if (value <0) {
//         throw new Error('...');
//     }
//     return this._budget = value;
// }

// get budget() {
//     return this._budget;
// }
