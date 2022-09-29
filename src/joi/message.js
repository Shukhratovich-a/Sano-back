import Joi from "joi";

const messagePostScheme = Joi.object({
  firstname: Joi.string().min(2).max(45).required(),
  surname: Joi.string().min(2).max(45).required(),
  mail: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().min(12).max(12).required(),
  organization: Joi.string().min(2).max(256),
  message: Joi.string().min(2).max(4096),
});

export default { messagePostScheme };
