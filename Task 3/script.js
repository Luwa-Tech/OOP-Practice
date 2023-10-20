class Vehicle {
    constructor(make, model, year){
        this._make = make
        this._model = model
        this._year = year
    }
    displayDetails() {
        console.log(`Make: ${this._make}`)
        console.log(`Model: ${this._model}`)
        console.log(`Year: ${this._year}`)
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year)
        this._doors = doors
    }
    displayDetails() {
        super.displayDetails()
        console.log(`Doors: ${this._doors}`)
    }

}

const car = new Car("Hyundai", "Titanium", 2012, 4)
console.log(car.displayDetails())