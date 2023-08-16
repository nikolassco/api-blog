require('dotenv').config();

const app = require('./server');

// const routes = require('./routes');


// cors


// app.use(express.json());

// app.use(routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: `App running is port ${process.env.PORT}` })
})

app.listen(process.env.PORT);
