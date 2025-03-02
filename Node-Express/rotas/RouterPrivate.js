const express = require('express');
const UsersRouter = require('./UsersRouter');
const PostsRouter = require('./PostsRouter');
const RouterPrivate = express.Router();

RouterPrivate.use(UsersRouter);
RouterPrivate.use(PostsRouter);

module.exports = RouterPrivate;