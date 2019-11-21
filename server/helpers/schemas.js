import Joi from '@hapi/joi';

const name = Joi.string()
  .required()
  .min(2)
  .trim()
  .label('first name');

const email = Joi.string()
  .email()
  .required()
  .trim()
  .lowercase()
  .label('email');

const password = Joi.string()
  .min(4)
  .required()
  .trim()
  .label('Password');

const signUpSchema = Joi.object().keys({
  name,
  email,
  password
});
const loginSchema = Joi.object().keys({
  email,
  password
});

export { signUpSchema, loginSchema };
