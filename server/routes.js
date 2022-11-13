const express = require('express');
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

  // save it in the db
  db.query(`INSERT INTO msgs (title, receiver, text, cron) VALUES ("${title}", "${receiver}", "${text}", "${cron}")`, (err) => {
    if (err) { throw err; }
  });

  // schedule a cron task, which is the twilio send message
  const task = scheduleMessage(cron, text, sender, receiver);
  // start the task
  task.start();

  res.send();
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

router.get('/contacts', (req, res) => {
  db.query('SELECT * FROM contacts', (err, data) => {
    if (err) { throw err; }
    res.status(200).send(data);
  });
});

router.post('/contacts', (req, res) => {
  const {
    firstName, lastName, number, email,
  } = req.body;
  db.query(`INSERT INTO contacts (firstName, lastName, number, email) VALUES ("${firstName}", "${lastName}", "${number}", "${email}")`, (err, data) => {
    if (err) { throw err; }
    res.status(201).send(data);
  });
});

router.delete('/contact', (req, res) => {
  const contactId = req.query.contact_id;
  db.query(`DELETE FROM contacts WHERE contact_id = ${contactId}`, (err, data) => {
    if (err) { throw err; }
    res.status(200).send(data);
  });
});

module.exports = router;
