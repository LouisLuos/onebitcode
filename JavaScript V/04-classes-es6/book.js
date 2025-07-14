class Book {
    constructor(tittle, pages, author,) {
        this.tittle = tittle
        this.pages = pages
        this.author = author
        this.published = false
    }
    publish () { this.published = true }

}

const book1 = new Book("Pneu", 100, "Joãozinho")
const book2 = new Book("Pneuzão", 150)

book1.publish()

console.log(book1)
console.log(book2)


