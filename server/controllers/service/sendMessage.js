/* eslint-disable import/order */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const config = require('./twilio-config');
const client = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

// refactor to take req, res, cb?
function sendMessage(body, from, to) {
  client.messages
    .create({
      body,
      from,
      to,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => { throw err; });
}

module.exports = sendMessage;
