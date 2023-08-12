const joi = require('joi');

const createPostSchema = joi.object({
  title: joi.string().required().messages({
    "any.required": "Título é obrigatório.",
    "string.empty": "Título é obrigatório."
  }),
  subtitle: joi.string().required().messages({
    "any.required": "Subtítulo é obrigatório.",
    "string.empty": "Subtítulo é obrigatório."
  }),
  post: joi.string().required().messages({
    "any.required": "Post é obrigatório.",
    "string.empty": "Post é obrigatório."
  }),
});

module.exports = createPostSchema;
