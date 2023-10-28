class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    bookDetails() {
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Year: ${this.year}`)
    }
}

class Ebook extends Book {
    constructor(title, author, year, price){
        super(title, author, year)
        this.price = price
    }
    bookDetails(){
        super.bookDetails()
        console.log(`Price:${this.price}`)
    }
}

const book1 = new Ebook("Essential Javascript for beginners", "John Doe", 2021, "$80.20")
book1.bookDetails()