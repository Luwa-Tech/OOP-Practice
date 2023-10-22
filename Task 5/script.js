class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    annualSalary() {
        return this.salary * 12
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary)
        this.department = department
    }
    annualSalary() {
        return (this.salary * 12) + 1000
    }
}

const carl = new Manager("carl lannister", 5000, "environment")
console.log(`name: ${carl.name}`)
console.log(`salary: ${carl.salary}`)
console.log(`department: ${carl.department}`)
const annualSalary = carl.annualSalary()
console.log(`annual salary: ${annualSalary}`)