function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const company = solve()

var guy3 = new company.Junior('pesho', 20);
var guy2 = new company.Senior('gosho', 21);
var guy1 = new company.Manager('ivan', 22);

console.log(guy1.name);
console.log(guy1.age);

guy1.salary = 200;
console.log(guy1.salary);
guy1.divident = 20;
console.log(guy1.divident);
guy1.work();
guy1.work();
guy1.work();
guy1.work();
guy1.collectSalary();
