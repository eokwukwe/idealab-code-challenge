import UserService from '../services/user';
import sendMail from '../helpers/sendEmail';
import http from '../helpers/http';

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
      const url = `${req.protocol}://${req.get('host')}/v1/auth?token=${token}`;
      await sendMail(email, 'Account Confirmation', url);
      newUser.message = 'Signup successful. Please check your mail to confirm your account';
      return http.httpSingleRecordResponse(res, newUser, 201);
    } catch (error) {
      return next(error);
    }
  }
}
