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
  const user = await User.findOne({
    where: { email: req.body.email }
  });

  if (!user.isVerified) {
    const options = {
      errorCode: 'COM_01',
      message: 'You are yet to confirm your account. Please check your mail',
      field: 'not-confirmed'
    };
    return http.httpErrorResponse(res, options, 401);
  }
  return next();
};
