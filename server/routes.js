const express = require('express');
const controllers = require('./controllers/controllers.js');
const db = require('./db.js');

const router = express.Router();

router.get('/messages', (req, res) => {
  db.query('SELECT * FROM msgs', (err, data) => {
    if (err) { throw err; }
    res.status(201).send(data);
  });
});

router.post('/messages', (req, res) => {
  const body = req.body;
  // controler function to modify time object into cron code
  
  // save it in the db
  db.query(`INSERT INTO msgs (title, receiver, sender, text, cron) VALUES ()`, () => {

  });
  // create a task with cron and twilio
  // start the task
});

router.post('/message/delete', () => {
  // remove from db
  // find cron twilio task
  // destroy task
});

module.exports = router;
