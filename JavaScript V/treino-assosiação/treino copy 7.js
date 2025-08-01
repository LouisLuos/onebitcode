class Post {
    constructor(tittle, content) {
        this.tittle = tittle
        this.content = content
        this.tagsPost = []
    }
    addTag(tag) {
        this.tagsPost.push(tag)
    }

}

class Tag {
    constructor(nameTag) {
        this.nameTag = nameTag
    }
}

const post1 = new Post ("Aprendendo JS", "É bem complicadinho POO")
post1.addTag(new Tag ("JavaScript"))
post1.addTag(new Tag ("POO"))

console.log(post1)

