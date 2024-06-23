const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/userModel');

const authHeader = {
  'Authorization': 'Basic ' + Buffer.from(`${process.env.AUTH_USER}:${process.env.AUTH_PASS}`).toString('base64')
};

describe('User Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  // Example test
  it('should list all users', async () => {
    const res = await request(app)
      .get('/api/worko/user')
      .set(authHeader);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  // Add more tests
});
