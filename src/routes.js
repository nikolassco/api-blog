const express = require('express');
const { signupUser } = require('./controllers/users');

const routes = express();

routes.post('/signup', signupUser)

module.exports = routes;
