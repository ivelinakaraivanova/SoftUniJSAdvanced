const { expect, assert } = require('chai');

const createCalculator = require('./AddSubtract');

describe('Add Subtract Numbers', () => {

    let a;

    beforeEach(() => {
        a = createCalculator();
    });

    it('returns true if add parameter cannot be parsed to number', () => {
        a.add('test');
        assert.isNaN(a.get(), true);
    });

    it('returns true if cubtract parameter cannot be parsed to number', () => {
        a.subtract('test');
        assert.isNaN(a.get(), true);
    });

    it('returns true after get', () => {
        assert.equal(a.get(), 0);
    });

    it('returns true after add after add', () => {
        a.add(4);
        a.add(6);
        assert.equal(a.get(), 10);
    });

    it('returns true after subtract after subtract', () => {
        a.subtract(6);
        a.subtract(4);
        assert.equal(a.get(), -10);
    });

    it('returns true after add after subtract', () => {
        a.subtract(-4);
        a.add(6);
        assert.equal(a.get(), 10);
    });

    it('returns true after subtract after add', () => {
        a.add(10);
        a.subtract(-6);
        assert.equal(a.get(), 16);
    });

    it('returns true after subtract, add, add, subtract', () => {
        a.subtract(10);
        a.add(-6);
        a.add(2.5);
        a.subtract(11.3)
        assert.equal(a.get(), -24.8);
    });

    it('returns true after add a number', () => {
        a.add(6);
        assert.equal(a.get(), 6);
    });

    it('returns true after add a string as number', () => {
        a.add('6');
        assert.equal(a.get(), 6);
    });

    it('returns true after subtract a number', () => {
        a.subtract(6);
        assert.equal(a.get(), -6);
    });

    it('returns true after subtract a string as number', () => {
        a.subtract('6');
        assert.equal(a.get(), -6);
    });

    it('has function add', () => {
        assert.isFunction(a.add);
    });

    it('has function subtract', () => {
        assert.isFunction(a.subtract);
    });

    it('has function get', () => {
        assert.isFunction(a.get);
    });

    it('the value cannot be changed from outside', () => {
        a.value = 7;
        assert.equal(a.get(), 0);
    });

    it('returns an object', () => {
        assert.isObject(a);
    });
})
