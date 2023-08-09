const knex = require('../connection');

const create = async (req, res) => {
  const { id: user_id } = req.params;
  const { title, subtitle, post } = req.body;

  if (!user_id) {
    return res.status(400).json({ message: "Usuário é obrigatório." });
  }

  if (!title) {
    return res.status(400).json({ message: "Título é obrigatório." });
  }

  if (!subtitle) {
    return res.status(400).json({ message: "Subtítulo é obrigatório." });
  }

  if (!post) {
    return res.status(400).json({ message: "Post é obrigatório." });
  }

  try {
    const newPost = await knex('posts').insert({
      user_id,
      title,
      subtitle,
      post
    })
      .returning('*');

    res.status(201).json({ message: newPost });

  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { create }
