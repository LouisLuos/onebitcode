class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
}

class Manager extends Employee {
    constructor(name, salary, departament) {
        super(name, salary) 
        this.departament = departament
    }
}

class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary) 
        this.programmingLanguage = programmingLanguage 
    }
}

const chefe = new Manager("Lucas", 8000, "TI")
const developer = new Developer ("Luiz", 4000, "JavaScript")

console.log(Employee)
console.log(chefe)
console.log(developer)

