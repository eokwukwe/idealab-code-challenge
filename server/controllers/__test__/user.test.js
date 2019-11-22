import request from 'supertest';

import app from '../../app';

const baseUrl = '/v1/user';

describe('User controller', () => {
  afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });
  describe('Account registration', () => {
    let token;
    it('should return 400 error if user tries to signup with invalid credentials', async () => {
      const response = await request(app)
        .post(`${baseUrl}/signup`)
        .send({ name: 'test', email: 'test.com', password: 'test' });
      expect(response.statusCode).toBe(400);
    });

    it('should create a new user with valid credentials', async () => {
      const response = await request(app)
        .post(`${baseUrl}/signup`)
        .send({
          name: 'test',
          email: 'test@test.com',
          password: 'password'
        });
      // eslint-disable-next-line prefer-destructuring
      token = response.body.access_token.split(' ')[1];
      expect(response.statusCode).toBe(201);
    });

    it('should not login a user with unconfirmed account', async () => {
      const response = await request(app)
        .post(`${baseUrl}/auth`)
        .send({
          email: 'test@test.com',
          password: 'password'
        });
      expect(response.statusCode).toBe(401);
    });

    it('should confirm the user account', async () => {
      const resp = await request(app).post(`/v1/confirm?token=${token}`);
      expect(resp.statusCode).toBe(200);
    });

    it('should login a user with confirmed account', async () => {
      const response = await request(app)
        .post(`${baseUrl}/auth`)
        .send({
          email: 'test@test.com',
          password: 'password'
        });
      expect(response.statusCode).toBe(200);
    });
    it('should return auth error if a user makes the request with a token', async () => {
      const response = await request(app).get(`${baseUrl}/permissions`);
      expect(response.statusCode).toBe(401);
    });
    it('should return array of users permissions', async () => {
      const response = await request(app)
        .get(`${baseUrl}/permissions`)
        .set('authorization', `Bearer ${token}`);
      expect(response.statusCode).toBe(200);
    });
  });
});
