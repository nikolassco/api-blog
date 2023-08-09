const express = require('express');
const posts = require('./controllers/posts');
const users = require('./controllers/users');
const verifyJwt = require('./middlewares/authorizarion');

const routes = express();

routes.post('/signup', users.signup);
routes.post('/signin', users.signin);

routes.use(verifyJwt);

routes.get('/user', users.get);

routes.post('/user/:id/post', posts.create);

module.exports = routes;
