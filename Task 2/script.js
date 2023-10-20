class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    calculateArea() {
        let area = this.height * this.width
        console.log(area)
    }
    calculatePerimeter() {
        let perimeter = 2 * (this.height + this.width)
        console.log(perimeter)

    }
}

const rectangle = new Rectangle(14, 120)
console.log(rectangle)
console.log(rectangle.calculateArea())
console.log(rectangle.calculatePerimeter())
