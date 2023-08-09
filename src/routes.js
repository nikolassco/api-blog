const express = require('express');
const user = require('./controllers/users');
const verifyJwt = require('./middlewares/authorizarion');

const routes = express();

routes.post('/signup', user.signup);
routes.post('/signin', user.signin);

routes.use(verifyJwt);

routes.get('/user', user.get);

module.exports = routes;
