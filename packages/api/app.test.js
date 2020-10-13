jest.mock('aws-sdk');
const { DynamoDB } = require('aws-sdk');
const request = require('supertest');

// Mock dynamodb service
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
  put: (params) => ({
    promise: () => {
      const { Item } = params;
      db[Item.id] = Item;
    },
  }),
});

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

it('should create a new item', async () => {
  expect(Object.keys(db)).toHaveLength(1);
  const res = await request(app)
    .post('/')
    .send({ test: 'new object' });

  expect(Object.keys(db)).toHaveLength(2);
  const newId = Object.keys(db).find((id) => id !== '123');
  expect(res.text).toContain(newId);
});
