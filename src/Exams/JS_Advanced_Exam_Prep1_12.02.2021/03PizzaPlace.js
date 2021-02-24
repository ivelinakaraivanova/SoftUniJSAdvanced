const assert = require('chai').assert;

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe('Pizza place', () => {

    it('Make an order', () => {
        let pizza1 = { orderedPizza: 'Margarita', orderedDrink: 'Juice' };
        assert.equal(pizzUni.makeAnOrder(pizza1), `You just ordered ${pizza1.orderedPizza} and ${pizza1.orderedDrink}.`, '1');
        let pizza2 = { orderedPizza: 'Margarita' };
        assert.equal(pizzUni.makeAnOrder(pizza2), `You just ordered ${pizza2.orderedPizza}`, '2');
        let pizza3 = { orderedDrink: 'Juice' };
        assert.throw(() => pizzUni.makeAnOrder(pizza3), 'You must order at least 1 Pizza to finish the order.', '3');
        let pizza4 = {};
        assert.throw(() => pizzUni.makeAnOrder(pizza4), 'You must order at least 1 Pizza to finish the order.', '4');
    });

    it('Get remaining work', () => {
        let pizzaArr1 = [{ pizzaName: 'Margarita', status: 'ready' }, { pizzaName: 'Quatro', status: 'preparing' }];
        assert.equal(pizzUni.getRemainingWork(pizzaArr1), `The following pizzas are still preparing: Quatro.`, '1');
        let pizzaArr2 = [{ pizzaName: 'Margarita', status: 'ready' }, { pizzaName: 'Quatro', status: 'ready' }];
        assert.equal(pizzUni.getRemainingWork(pizzaArr2), `All orders are complete!`, '2');
    });

    it('Order type', () => {
        assert.equal(pizzUni.orderType(10, 'Carry Out'), 9, '1');
        assert.equal(pizzUni.orderType(10, 'Delivery'), 10, '2');
    });
})