const assert = require('chai').assert;

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};


describe("Number operations", () => {

    describe("Power number", () => {

        it("returns power of positive number", () => {
            assert.equal(numberOperations.powNumber(4), 16);
        });

        it("returns power of negative number", () => {
            assert.equal(numberOperations.powNumber(-4), 16);
        });

        it("returns power of 0", () => {
            assert.equal(numberOperations.powNumber(0), 0);
        });
    });

    describe("Number Checker", () => {

        it("if is NaN", () => {
            assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
        });

        it("if is lower than 100", () => {
            assert.equal(numberOperations.numberChecker('45'), 'The number is lower than 100!');
        });

        it("if is 100", () => {
            assert.equal(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
        });

        it("if is greater than 100", () => {
            assert.equal(numberOperations.numberChecker('105'), 'The number is greater or equal to 100!');
        });
    });

    describe("Sum arrays", () => {
        const firstArr = [2, 3, 6, 9];
        const secondArr = [5, 2, 9, 16, 15];

        it("first array longer", () => {
            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [7, 5, 15, 25, 15]);
        });

        it("second array longer", () => {
            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [7, 5, 15, 25, 15]);
        });
    });
});
