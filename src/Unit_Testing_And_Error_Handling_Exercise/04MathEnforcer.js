const assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('Math enforcer', () => {

    it('returns true if add parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.addFive('y'), true);
    });

    it('returns true if add parameter is a positive number', () => {
        assert.equal(mathEnforcer.addFive(3), 8);
    });

    it('returns true if add parameter is a negative number', () => {
        assert.equal(mathEnforcer.addFive(-3), 2);
    });

    it('returns true if add parameter is a negative float number', () => {
        assert.equal(mathEnforcer.addFive(-3.5), 1.5);
    });

    it('returns true if add parameter is a positive float number', () => {
        assert.equal(mathEnforcer.addFive(3.5), 8.5);
    });

    it('returns true if subtract parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.subtractTen('y'), true);
    });

    it('returns true if subtract parameter is a positive number', () => {
        assert.equal(mathEnforcer.subtractTen(3), -7);
    });

    it('returns true if subtract parameter is a negative number', () => {
        assert.equal(mathEnforcer.subtractTen(-3), -13);
    });

    it('returns true if subtract parameter is a positive float number', () => {
        assert.equal(mathEnforcer.subtractTen(3.8), -6.2);
    });

    it('returns true if subtract parameter is a negative float number', () => {
        assert.equal(mathEnforcer.subtractTen(-3.2), -13.2);
    });

    it('returns true if sum first parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.sum('ee', 5), true);
    });

    it('returns true if sum second parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.sum(5, 'ee'), true);
    });

    it('returns true if sum both parameters are not numbers', () => {
        assert.isUndefined(mathEnforcer.sum('aa', 'ee'), true);
    });

    it('returns true if sum both parameters are positive numbers', () => {
        assert.equal(mathEnforcer.sum(5, 10), 15);
    });

    it('returns true if sum both parameters are negative numbers', () => {
        assert.equal(mathEnforcer.sum(-5, -10), -15);
    });

    it('returns true if sum both parameters are positive float numbers', () => {
        assert.equal(mathEnforcer.sum(5.5, 10.1), 15.6);
    });

    it('returns true if sum both parameters are negative float numbers', () => {
        assert.equal(mathEnforcer.sum(-5.5, -10.1), -15.6);
    });

    it('returns true if sum both parameters are different float numbers', () => {
        assert.equal(mathEnforcer.sum(-5.5, 10), 4.5);
    });
})