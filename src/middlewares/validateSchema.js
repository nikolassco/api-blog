const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body || req.params);

    next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = validateSchema;
