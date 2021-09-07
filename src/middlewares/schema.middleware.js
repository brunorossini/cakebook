module.exports = (schema) => async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(406);
    res.json(error.message);
  } else {
    next();
  }
};
