import isEmpty from 'lodash.isempty';

import http from '../helpers/http';
import UserService from '../services/user';
import sendMail from '../helpers/sendEmail';
import authentication from '../middlewares/authentication';

/**
 * @class UserController
 * @description Controllers for Users
 * @exports UsersController
 */
export default class UserController {
  /**
   * @method signup
   * @description Method for user registration
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async signup(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const newUser = await UserService.createUser({
        name,
        email,
        password
      });
      const token = newUser.access_token.split(' ')[1];
      const url = `${req.protocol}://${req.get('host')}/v1/confirm?token=${token}`;
      await sendMail(email, 'Account Confirmation', url);
      newUser.message = 'Signup successful. Please check your mail to confirm your account';
      return http.httpSingleRecordResponse(res, newUser, 201);
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @method confirm
   * @description Method for confirming user email
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async confirm(req, res, next) {
    try {
      const { token } = req.query;
      const { userId } = await authentication.verifyToken(token);
      const checkUser = await UserService.getUser({ id: userId });
      if (isEmpty(checkUser)) {
        return http.httpErrorResponse(res, {
          message: 'User not found or invalid token'
        });
      }
      await UserService.updateUser({ isVerified: true }, { id: checkUser.id });
      return http.httpSingleRecordResponse(
        res,
        { message: 'Account confirmed. You can now log in' },
        200
      );
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @method login
   * @description Method for user login
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await UserService.getUser({ email });
      const options = {
        errorCode: 'USR_01',
        field: 'email/password',
        message: 'Email or Password is invalid.'
      };
      if (!isEmpty(user)) {
        const validatePassword = await user.validatePassword(password);
        if (validatePassword) {
          const userSafeData = UserService.getSafeDataValues(user);
          return http.httpSingleRecordResponse(res, userSafeData, 200);
        }
        return http.httpErrorResponse(res, options, 400);
      }
      return http.httpErrorResponse(res, options, 400);
    } catch (error) {
      return next(error);
    }
  }
}
