const express = require('express');
const cronCode = require('./controllers/controllers.js');
const scheduleMessage = require('../service/scheduleMessage.js');
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

  // schedule a cron task, which is the twilio send message
  const task = scheduleMessage(cron, text, sender, receiver);

  // start the task
  task.start();
});

router.post('/message/delete', () => {
  // remove from db
  // find cron twilio task
  // destroy task
});

module.exports = router;
