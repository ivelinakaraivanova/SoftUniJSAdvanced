const assert = require('chai').assert;


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Lookup char', () => {

    it('returns undefined if first parameter is not a string', () => {
        assert.isUndefined(lookupChar(3, 3), true);
    });

    it('returns undefined if second parameter is not a number', () => {
        assert.isUndefined(lookupChar('querty', 'qq'), true);
    });

    it('returns undefined if second parameter is not an integer', () => {
        assert.isUndefined(lookupChar('querty', 3.3), true);
    });

    it('returns \'incorrect index\' if index is negative', () => {
        assert.equal(lookupChar('qwerty', -1), 'Incorrect index');
    });

    it('returns \'incorrect index\' if index is bigger than string\'s length', () => {
        assert.equal(lookupChar('qwerty', 19), 'Incorrect index');
    });

    it('returns \'incorrect index\' if index is equal to the string\'s length', () => {
        assert.equal(lookupChar('qwerty', 6), 'Incorrect index');
    });

    it('returns char at the correct index', () => {
        assert.equal(lookupChar('qwerty', 4), 't');
    });

})
