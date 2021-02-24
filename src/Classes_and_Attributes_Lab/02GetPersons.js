function solve() {
    class Person {
        constructor (firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }

        
    }
    let persons = [];
    const firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    persons.push(firstPerson);
    const secondPerson = new Person('SoftUni');
    persons.push(secondPerson);
    const thirdPerson = new Person ('Stephan', 'Johnson', 25);
    persons.push(thirdPerson);
    const forthPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    persons.push(forthPerson);

    return persons;

}

console.log(solve());