const express = require('express');
const cronCode = require('./controllers/controllers.js');
const db = require('./db.js');

const router = express.Router();

router.get('/messages', (req, res) => {
  db.query('SELECT * FROM msgs', (err, data) => {
    if (err) { throw err; }
    res.status(200).send(data);
  });
});

router.post('/messages', (req, res) => {
  const {
    title, receiver, sender, text, time,
  } = req.body;

  const cron = cronCode(time);

  // make this ctually async
  setTimeout(() => {
    console.log('await');
  }, 7000);

  // save it in the db
  db.query(`INSERT INTO msgs (title, receiver, sender, text, cron) VALUES ("${title}", "${receiver}", "${sender}", "${text}", "${cron}")`, (err, data) => {
    if (err) { throw err; }
    res.status(201).send(data);
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
