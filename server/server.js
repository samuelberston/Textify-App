const path = require('path');
const express = require('express');
const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/test', (req, res) => {
  res.send('test');
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
