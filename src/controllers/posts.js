const knex = require('../connection');

const create = async (req, res) => {
  const { id: user_id } = req.params;
  const { title, subtitle, post } = req.body;

  if (!user_id || isNaN(user_id)) {
    return res.status(404).json({ message: "Usuário não encontrado." });
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
    const existsUser = await knex('users').where({ id: user_id }).first();

    if (!existsUser) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

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

const getAll = async (req, res) => {
  try {
    const posts = await knex('posts');

    res.status(200).json({ message: posts });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

const get = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(404).json({ message: "Post não encontrado." });
  }

  try {
    const post = await knex('posts').where({ id }).first();

    if (!post) {
      return res.status(404).json({ message: "Post não encontrado." });
    }

    res.status(200).json({ message: post });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

const edit = async (req, res) => {
  const { id } = req.params;
  const { title, subtitle, post } = req.body;

  if (isNaN(id)) {
    return res.status(404).json({ message: "Post não encontrado." });
  }

  try {
    const existsPost = await knex('posts').where({ id }).first();

    if (!existsPost) {
      return res.status(404).json({ message: "Post não encontrado." });
    }

    const updatedPost = await knex('posts').where({ id }).update({
      title,
      subtitle,
      post
    }).returning('*');

    res.status(200).json({ message: updatedPost });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

const deleted = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(404).json({ message: "Post não encontrado." });
  }

  try {
    const existsPost = await knex('posts').where({ id }).first();

    if (!existsPost) {
      return res.status(404).json({ message: "Post não encontrado." });
    }

    await knex('posts').where({ id }).del();

    res.status(200).json({ message: "Post excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error });
  }

}

module.exports = { create, getAll, get, edit, deleted }
