const knex = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Nome é obrigatório." })
  }

  if (!email) {
    return res.status(400).json({ message: "E-mail é obrigatório." })
  }

  if (!password) {
    return res.status(400).json({ message: "Senha é obrigatória." })
  }

  try {
    const userExists = await knex('users').where({ email });

    if (userExists.length > 0) {
      return res.status(400).json({ message: "Usuário já cadastrado." })
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = await knex('users').insert({
      name,
      password: hashPass,
      email
    })
      .returning('*');

    return res.status(201).json({ message: newUser });

  } catch (error) {
    res.status(500).json({ message: error });
  }
}

const signinUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "E-mail é obrigatório." })
  }

  if (!password) {
    return res.status(400).json({ message: "Senha é obrigatória." })
  }

  try {
    const user = await knex('users').where({ email });

    if (user.length < 1) {
      return res.status(400).json({ message: 'E-mail ou senha inválido(a).' });
    }

    const validPassword = await bcrypt.compare(password, user[0].password);

    if (!validPassword) {
      return res.status(400).json({ message: 'E-mail ou senha inválido.' });
    }

    const token = jwt.sign({ id: user[0].id }, process.env.JWTKEY, { expiresIn: '8h' });

    const { password: _, ...userLogged } = user[0];

    return res.status(200).json({ message: { user: userLogged, token } });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { signupUser, signinUser }
