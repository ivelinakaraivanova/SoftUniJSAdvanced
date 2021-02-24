const { assert } = require('chai');

const PaymentPackage = require('./13PaymentPackage');

describe('Payment package', () => {

    let package;

    beforeEach(() => {
        package = new PaymentPackage('Test', 1000);
    });

    it('constructor tests', () => {
        assert.equal(package._name, 'Test');
        assert.equal(package._value, 1000);
        assert.equal(package._VAT, 20);
        assert.equal(package._active, true);
    });

    it('name tests', () => {
        assert.equal(package.name, 'Test');

        package.name = 'Test1';
        assert.equal(package.name, 'Test1');
        assert.throw(() => { package.name = '' }, 'Name must be a non-empty string');
        assert.throw(() => { package.name = 5 }, 'Name must be a non-empty string');
    });

    it('value tests', () => {
        assert.equal(package._value, 1000);
        package.value = 500;
        assert.equal(package.value, 500);
        assert.throw(() => { package.value = 't' }, 'Value must be a non-negative number');
        assert.throw(() => { package.value = -5 }, 'Value must be a non-negative number');
        assert.doesNotThrow(() => { package.value = 0 })
    });

    it('VAT tests', () => {
        assert.equal(package.VAT, 20);
        package.VAT = 25;
        assert.equal(package.VAT, 25);
        assert.throw(() => { package.VAT = 't' }, 'VAT must be a non-negative number');
        assert.throw(() => { package.VAT = -5 }, 'VAT must be a non-negative number');
    });

    it('activ tests', () => {
        assert.equal(package._active, true);
        package.active = false;
        assert.equal(package.active, false);
        assert.throw(() => { package.active = 't' }, 'Active status must be a boolean');
    });

    it('toString tests', () => {
        function getString(name, value, VAT=20, active=true) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
              ].join('\n');
        }

        assert.equal(package.toString(), getString('Test', 1000));
        package.name = 'Test2';
        assert.equal(package.toString(), getString('Test2', 1000));
        package.value = 500;
        assert.equal(package.toString(), getString('Test2', 500));
        package.VAT = 25;
        assert.equal(package.toString(), getString('Test2', 500, 25, true));
        package.active = false;
        assert.equal(package.toString(), getString('Test2', 500, 25, false));
    });
})
