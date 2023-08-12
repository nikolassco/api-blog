const joi = require('joi');

const loginUserSchema = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "E-mail é obrigatório.",
    "string.empty": "E-mail é obrigatório.",
    "string.email": "E-mail está em um formato inválido."
  }),
  password: joi.string().required().messages({
    "any.required": "Senha é obrigatória.",
    "string.empty": "Senha é obrigatória.",
  })
});

module.exports = loginUserSchema;
