import models from '../database/models';
import BaseService from './base';

const { User } = models;

/**
 * @class UserService
 */
export default class UserService extends BaseService {
  /**
   * @description This creates a new user
   *
   * @param {object} payload User data to create user
   * @returns {object} Return a Object of user with auth credencials
   */
  static async createUser(payload) {
    const newUser = await this.create(User, payload);
    const userData = await UserService.getUser({
      id: newUser.id
    });
    return UserService.getSafeDataValues(userData);
  }

  /**
   * @description This method searches the user table
   * and retrieves the row based on the option provided
   * @param  {object} option
   * @returns  {Promise<object>} user
   * @member UserService
   */
  static async getUser(option) {
    const user = await this.findOne(User, option);
    return user;
  }

  /**
   * @description This service formats user object to be returned to the client
   * @param  {object} userData
   * @returns  {object} formatted user object
   * @member UserService
   */
  static getSafeDataValues(userData) {
    return {
      user: {
        schema: userData.getSafeDataValues()
      },
      accessToken: `Bearer ${userData.generateToken()}`,
      expires_in: '24h'
    };
  }
}
