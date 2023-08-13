const knex = require('../connection');

const createPost = async (req, res) => {
  const { id: user_id } = req.params;
  const { title, subtitle, post } = req.body;

  if (!user_id || isNaN(user_id)) {
    return res.status(404).json({ message: "Usuário não encontrado." });
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

const getAllPosts = async (req, res) => {
  try {
    const posts = await knex('posts');

    res.status(200).json({ message: posts });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

const getPost = async (req, res) => {
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

const editPost = async (req, res) => {
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

const deletePost = async (req, res) => {
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

module.exports = { createPost, getAllPosts, getPost, editPost, deletePost }
