import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import http from '../helpers/http';

dotenv.config();

const { JWT_SECRET } = process.env;

export default {
  generateToken(userId) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24hr' });
  },

  async verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
  },

  async authenticate(req, res, next) {
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
      req.user = await this.verifyToken(token);
      return next();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return http.httpErrorResponse(res, options, 401);
    }
  }
};
