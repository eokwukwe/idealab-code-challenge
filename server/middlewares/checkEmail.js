import isEmpty from 'lodash.isempty';
import models from '../database/models';
import http from '../helpers/http';

const { User } = models;

/**
 * @description This function checks the customer table to confirm
 * if an email already exits in the table
 * @param  {object} req HTTP request object
 * @param  {object} res HTTP rewpone object
 * @param  {function} next
 * @return  {object} Server Response
 */
export default async (req, res, next) => {
  const userExist = await User.findOne({
    attributes: ['email'],
    where: { email: req.body.email }
  });

  if (!isEmpty(userExist)) {
    const options = {
      errorCode: 'USR_04',
      message: 'The email already exists.',
      field: 'email'
    };
    return http.httpErrorResponse(res, options, 400);
  }
  return next();
};
