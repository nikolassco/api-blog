const knex = require('../connection');
const bcrypt = require('bcrypt');

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
    res.status(500).json({ message: error })
  }
}

module.exports = { signupUser }
