jest.mock('aws-sdk');
const { DynamoDB } = require('aws-sdk');

const db = {
  123: { json: '{ "hello": "world" }' },
};

DynamoDB.DocumentClient.mockReturnValue({
  get: (params) => ({
    promise: () => {
      const { id } = params.Key;
      return { Item: db[id] };
    },
  }),
});

const request = require('supertest');
const app = require('./app');

it('should test api', async () => {
  const res = await request(app).get('/test');
  expect(res.text).toBe('Request received');
});

it('should return an existing item in the db', async () => {
  const res = await request(app).get('/123');
  expect(res.text).toBe(db[123].json);
});

it('should return a 404 for a non existing item', async () => {
  const res = await request(app).get('/456');
  expect(res.status).toBe(404);
});
