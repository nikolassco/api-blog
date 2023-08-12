const express = require('express');
const { getAllPosts, getPost, createPost, editPost, deletePost } = require('./controllers/post');
const { signupUser, signinUser, getUser } = require('./controllers/user');
const verifyJwt = require('./middlewares/validateToken');
const validateSchema = require('./middlewares/validateSchema');
const createUserSchema = require('./schema/createUserSchema');
const loginUserSchema = require('./schema/loginUserSchema');
const createPostSchema = require('./schema/createPostSchema');

const routes = express();

routes.post('/signup', validateSchema(createUserSchema), signupUser);
routes.post('/signin', validateSchema(loginUserSchema), signinUser);

routes.use(verifyJwt);

routes.get('/user', getUser);

routes.get('/post', getAllPosts);
routes.get('/post/:id', getPost);
routes.post('/user/:id/post', validateSchema(createPostSchema), createPost);
routes.put('/post/:id', editPost);
routes.delete('/post/:id', deletePost);

module.exports = routes;
