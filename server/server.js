const path = require('path');
const express = require('express');
const router = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
