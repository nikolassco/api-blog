const express = require('express');

const app = express();

const routes = require('./routes');

// // cors


app.use(express.json());

app.use(routes);

// app.listen(process.env.PORT)

module.exports = app;
