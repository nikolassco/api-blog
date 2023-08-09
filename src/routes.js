const express = require('express');
const { signupUser, signinUser } = require('./controllers/users');

const routes = express();

routes.post('/signup', signupUser)
routes.post('/signin', signinUser)

module.exports = routes;
