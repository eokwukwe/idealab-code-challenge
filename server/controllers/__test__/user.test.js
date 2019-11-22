import request from 'supertest';

import app, { server } from '../../app';
const baseUrl = '/v1/user';

describe('User controller', () => {
  // afterAll(async done => {
  //   await server.close();
  //   done();
  // });
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

    it('should confirm the user account', async () => {
      const resp = await request(app).post(`/v1/confirm?token=${token}`);
      expect(resp.statusCode).toBe(200);
    });
  });
});
