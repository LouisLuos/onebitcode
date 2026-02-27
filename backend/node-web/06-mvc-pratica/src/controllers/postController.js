const postsModel = require('../models/postModel')

const postsController = {

    // GET / 
    index: (req, res) => {
        const posts = postsModel.getAllPosts()
        res.render('index', { posts })

    },

    // GET /posts/:id

    show: (req, res) => {
        const id = req.params.id
        const post = postsModel.getPostById(id)
        res.render('post', { post })
    }
}

module.exports = postsController
