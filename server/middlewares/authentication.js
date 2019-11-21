import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import http from '../helpers/http';

dotenv.config();

export default {
  /**
   * @description Generate a token for the user
   *  The token expires in 24 hours
   * @param {number} customer_id The id of the customer
   * @returns {string} token
   * @mwmber Authentication
   */
  generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '24hr' });
  },

  async verifyToken(req, res, next) {
    const { authorization } = req.headers;
    const options = {
      errorCode: 'AUT_01',
      message: 'Access Unauthorized',
      field: 'accessToken'
    };
    try {
      if (typeof authorization === 'undefined') {
        return http.httpErrorResponse(res, options, 401);
      }
      const token = authorization.split(' ')[1];
      req.user = await jwt.verify(token, process.env.JWT_SECRET);
      return next();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return http.httpErrorResponse(res, options, 401);
    }
  }
};
