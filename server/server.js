const path = require('path');
const express = require('express');
const router = require('./routes.js');

const app = express();
const port = 3000;

// const logger = (req, res) => {
//   console.log(`Receiving ${req.type} request to ${req.url}`);
//   res.next();
// };

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

// app.use('/', logger);

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
