const express = require('express');
const PostControllers = require('../controllers/PostControllers');

const PostsRouter = express.Router(); 

const postController = new PostControllers();

PostsRouter.get('/posts', postController.findAll)
PostsRouter.get('/posts/:id', postController.getById)
PostsRouter.post('/posts', postController.create)
PostsRouter.put('/posts/:id', postController.update)
PostsRouter.delete('/posts/:id', postController.remove)

module.exports = PostsRouter