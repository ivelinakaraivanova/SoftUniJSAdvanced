class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input');
        }

        const employee = {
            username,
            salary,
            position
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${employee.username}. Position: ${employee.position}`;
    }


    bestDepartment() {
        let bestDpt = '';
        let bestDptAvgSalary = 0;

        for (const department of Object.keys(this.departments)) {
            this.departments[department].sort((a, b) => {
                if (a.salary !== b.salary) {
                    return b.salary - a.salary;
                } else {
                    return a.username.localeCompare(b.username);
                }
            });

            const avgSalary = this.departments[department].reduce((sum, employee) =>
                sum + employee.salary, 0) / this.departments[department].length;

            if (avgSalary > bestDptAvgSalary) {
                bestDpt = department;
                bestDptAvgSalary = avgSalary;
            }
        }


        const dptLines =
            this.departments[bestDpt]
                .map(employee => `${employee.username} ${employee.salary} ${employee.position}`)
                .join('\n');


        return `Best Department is: ${bestDpt}\nAverage salary: ${bestDptAvgSalary.toFixed(2)}\n` + dptLines;

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
