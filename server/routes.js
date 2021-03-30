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

  console.log(cron);

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

  res.send('posted');
});

router.delete('/message', (req, res) => {
  const messageId = req.query.message_id;
  // remove from db
  db.query(`DELETE FROM msgs WHERE message_id = ${messageId}`, (err, data) => {
    if (err) { throw err; }
    res.status(200).send(data);
  });
  // find cron twilio task
  // destroy task
});

module.exports = router;
