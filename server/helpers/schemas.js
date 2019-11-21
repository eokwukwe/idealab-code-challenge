import Joi from '@hapi/joi';

const firstName = Joi.string()
  .required()
  .min(2)
  .trim()
  .label('first name');

const lastName = Joi.string()
  .required()
  .min(2)
  .trim()
  .label('last name');

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
  firstName,
  lastName,
  email,
  password
});
const loginSchema = Joi.object().keys({
  email,
  password
});

export { signUpSchema, loginSchema };
