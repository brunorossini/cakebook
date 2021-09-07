const Joi = require("joi");
const schemaValidator = require("../middlewares/schema.middleware");

const schema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  confirm_password: Joi.ref("password"),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
}).with("password", "confirm_password");

module.exports = schemaValidator(schema);
