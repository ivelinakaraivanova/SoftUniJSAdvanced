const { expect, assert } = require('chai');

const rgbToHexColor = require('./RGBToHex');

describe('RGB to Hex', () => {
    
    it('returns true same color red as string', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000');
    });

    it('returns true same color green as string', () => {
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00');
    });

    it('returns true same color blue as string', () => {
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF');
    });

    it('returns indefined if invalid type', () => {
        assert.equal(rgbToHexColor('f', 0, 255), undefined);
    });

    it('returns indefined if invalid type', () => {
        assert.equal(rgbToHexColor(34, -5, 255), undefined);
    });

    it('returns indefined if invalid type', () => {
        assert.equal(rgbToHexColor(150, 0, 265), undefined);
    });

})