let posts = []

const postModel = {
    getAllPosts() {
        return posts
    },

    getPostById(id) {
        return posts.find(post => post.id === id)
    },

    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title: title,
            content: content,
            createdAt: new Date(),
            updateAt: new Date()            
        }
        return post
    },

    savePost( post) {
        posts.push(post)
    },

    updatePost(id, updatedPost) {
        const index = posts.findIndex(post => post.id === id)
        posts[index] = { ...posts[index], ...updatedPost, updateAt: new Date()}
    },

    deletePost(id) {
        posts = posts.filter(post => post.id !== id)
    }

}

module.exports = postModel