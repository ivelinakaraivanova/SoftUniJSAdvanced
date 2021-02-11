// const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}



describe('Even or Odd', () => {

    it('returns undefined', () => {
        assert.isUndefined(isOddOrEven(3), true);
    });

    it('returns even', () => {
        assert.equal(isOddOrEven('qwerty'), 'even');
    });

    it('returns odd', () => {
        assert.equal(isOddOrEven('qwertyu'), 'odd');
    });
})
