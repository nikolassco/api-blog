const express = require('express');
const posts = require('./controllers/posts');
const users = require('./controllers/users');
const verifyJwt = require('./middlewares/authorizarion');
const validateSchema = require('./middlewares/validateSchema');
const createUserSchema = require('./schema/createUserSchema');
const loginUserSchema = require('./schema/loginUserSchema');

const routes = express();

routes.post('/signup', validateSchema(createUserSchema), users.signup);
routes.post('/signin', validateSchema(loginUserSchema), users.signin);

routes.use(verifyJwt);

routes.get('/user', users.get);

routes.get('/post', posts.getAll)
routes.get('/post/:id', posts.get)
routes.post('/user/:id/post', posts.create);
routes.put('/post/:id', posts.edit);
routes.delete('/post/:id', posts.deleted);

module.exports = routes;
