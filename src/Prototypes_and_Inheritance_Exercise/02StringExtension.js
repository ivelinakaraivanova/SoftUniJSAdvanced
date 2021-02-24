(function solve() {
    String.prototype.ensureStart = function (str) {
        let resultStr = '';
        if (!this.startsWith(str)) {
            resultStr = str + this;
            return resultStr;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        let resultStr = '';
        if (!this.endsWith(str)) {
            resultStr = this + str;
            return resultStr;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    }

    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        } else {
            let lastSpaceInd = this.toString().substr(0, n - 2).lastIndexOf(' ');
            if (lastSpaceInd != -1) {
                return this.toString().substr(0, lastSpaceInd) + '...';
            } else {
                return this.toString().substr(0, n - 3) + '...';
            }
        }
    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let idx = string.indexOf('{' + i + '}');
            while (idx != -1) {
                string = string.replace('{' + i + '}', params[i]);
                idx = string.indexOf('{' + i + '}')
            }
        }
        return string;
    }
})();


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');

