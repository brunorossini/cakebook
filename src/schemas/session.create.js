const Joi = require("joi");
const schemaValidator = require("../middlewares/schema.middleware");

const schema = Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

module.exports = schemaValidator(schema);
