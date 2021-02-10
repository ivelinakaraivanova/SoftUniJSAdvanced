function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

module.exports = createCalculator;

// let a = createCalculator();
// a.add(4);
// a.add(6);
// console.log(a.get());