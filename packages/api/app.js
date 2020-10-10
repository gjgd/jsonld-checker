const express = require('express');

const app = express();

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
