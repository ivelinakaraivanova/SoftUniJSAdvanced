(function solve() {

    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        let resultArr = [];
        for (let i = n; i < this.length; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    }

    Array.prototype.take = function(n) {
        let resultArr = [];
        for (let i = 0; i < n; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    }

    Array.prototype.sum = function() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    }

    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})();

solve();

let myArr = [3, 4, 7, 0, 10, 20, 30];
console.log(myArr.last());
console.log(myArr.skip(2));
console.log(myArr.take(5));
console.log(myArr.sum());
console.log(myArr.average());