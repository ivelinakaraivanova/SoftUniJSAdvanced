const assert = require('chai').assert;

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe("Dealership", () => {
    describe("newCarCost", () => {

        it("has old car", () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 50000), 35000);
        });

        it("no old car", () => {
            assert.equal(dealership.newCarCost('c', 5), 5);
        });
    })

    describe("carEquipment", () => {

        it("selected more extras", () => {
            assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims'], [0,2]), ['heated seats','sport rims']);
        });

        it("selected one extra", () => {
            assert.deepEqual(dealership.carEquipment(['belt'], [0]), ['belt']);
        });

        it("selected extras", () => {
            assert.deepEqual(dealership.carEquipment(['g','h', 'f'], [0,2]), ['g', 'f']);
        });

        it("selected extra", () => {
            assert.deepEqual(dealership.carEquipment(['g','h', 'f'], [1]), ['h']);
        });
    })

    describe("euroCategory", () => {

        it("category more than 4", () => {
            assert.equal(dealership.euroCategory(7), `We have added 5% discount to the final price: 14250.`);
        });

        it("category equal to 4", () => {
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
        });

        it("category less than 4", () => {
            assert.equal(dealership.euroCategory(2), 'Your euro category is low, so there is no discount from the final price!');
        });
    })
    
});
