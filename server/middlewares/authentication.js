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
    const accessToken = req.headers.authorization;
    const options = {
      errorCode: 'AUT_01',
      message: 'Access Unauthorized',
      field: 'accessToken'
    };
    try {
      if (typeof accessToken === 'undefined') {
        return http.httpErrorResponse(res, options, 401);
      }
      const token = accessToken.split(' ')[1];
      const decoded = await jwt.verify(token, JWT_SECRET);
      if (!decoded) {
        return http.httpErrorResponse(res, options, 401);
      }
      req.user = decoded;
      return next();
    } catch (error) {
      return http.httpErrorResponse(res, options, 401);
    }
  }
};
