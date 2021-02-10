const { expect, assert } = require('chai');
const sum = require('./SumOfNumbers');


describe('Sum of numbers', () => {
    it('sums single number', () => {
        assert.equal(sum([1]), 1);
    });

    it('sums more numbers', () => {
        assert.equal(sum([1, 1]), 2);
    });

    it('sums different numbers', () => {
        assert.equal(sum([3, 4, 5]), 12);
    });
});