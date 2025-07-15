class Author {
    constructor (name, bio) {
        this.name = name
        this.bio = bio
    }
}

class Post {
    constructor (tittle, content, author) {
        this.tittle = tittle
        this.content = content
        this.author = author
    }
}

const autor1 = new Author ("Luiz", "Programador Back-end")
const post1 = new Post ("Aprendendo JS", "POO", autor1)
console.log(`O post ${post1.tittle} foi escrito por ${post1.author.name}`)

console.log(Post)