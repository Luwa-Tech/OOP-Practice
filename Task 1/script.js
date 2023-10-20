class Person{
    constructor(name, age, country){
        this.name = name
        this.age = age
        this.country = country
    }
    Display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`)
    }
}

const first = new Person('Yusuf umar faruq', 26, "Nigeria")
const second = new Person("Abdulrasheed buba", 29, "Nigeria")

const users = [first, second]
for (all of users){
    all.Display()
}