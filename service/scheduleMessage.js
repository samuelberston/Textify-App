const cron = require('node-cron');
const sendMessage = require('./sendMessage');

function scheduleMessage(cronCode, body, from, to) {
  return cron.schedule(cronCode, () => {
    sendMessage(body, from, to)
      .then((data) => { console.log(data); })
      .catch((err) => { throw err; });
  });
}

module.exports = scheduleMessage;
