const { expect, assert } = require('chai');

const isSymmetric = require('./CheckForSymmetry');

describe('Check for symmetry', () => {
    
    it('checks not array', () => {
        assert.equal(isSymmetric('1'), false);
    });

    it('checks odd num array is symmetric', () => {
        assert.equal(isSymmetric([1, 2, 1]), true);
    });

    it('checks even num array is symmetric', () => {
        assert.equal(isSymmetric([1, 2, 2, 1]), true);
    });

    it('checks num array not symmetric', () => {
        assert.equal(isSymmetric([1, 2]), false);
    });

    it('checks string array is symmetric', () => {
        assert.equal(isSymmetric(['b', 'b']), true);
    });

    it('checks string array is not symmetric', () => {
        assert.equal(isSymmetric(['b', 'd']), false);
    });

    it('checks type-coerced array not symmetric', () => {
        assert.equal(isSymmetric([1, '1']), false);
    });
});