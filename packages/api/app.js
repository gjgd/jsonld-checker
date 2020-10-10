const express = require('express');
const { DynamoDB } = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const app = express();
const dynamoDb = new DynamoDB.DocumentClient();

// Enable CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// });
// app.options('*', (req, res) => {
//   res.status(200).send();
// });

app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).send('Request received');
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id,
    },
  };
  const record = await dynamoDb.get(params).promise();
  if (record.Item) {
    res.status(200).send(record.Item.json);
  } else {
    res.sendStatus(404);
  }
});

app.post('/', async (req, res) => {
  const { body } = req;
  const id = uuidv4();
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      id,
      json: JSON.stringify(body),
      created_timestamp: Date.now(),
      created_date: new Date().toISOString(),
    },
  };
  await dynamoDb.put(params).promise();
  res.status(200).send(`${process.env.API_URL}/${id}`);
});

app.get('/*', (req, res) => {
  res.status(404).send('Route not found');
});

app.use((err, req, res) => {
  console.error(err);
  res
    .status(500)
    .json({ error: `Internal Serverless Error - "${err.message}"` });
});

module.exports = app;
