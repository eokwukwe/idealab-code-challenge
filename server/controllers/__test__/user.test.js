import request from 'supertest';

import app from '../../app';

const baseUrl = '/v1/user';

describe('User controller', () => {
  describe('Signup', () => {
    it('should return 400 error if user tries to signup with invalid credentials', async () => {
      const response = await request(app)
        .post(`${baseUrl}/signup`)
        .send({ name: 'test', email: 'test.com', password: 'test' });
      expect(response.statusCode).toBe(400);
    });
  });
});
