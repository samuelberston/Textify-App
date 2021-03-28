/* eslint-disable import/order */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure

const config = require('./twilio-config');

const client = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

client.messages
  .create({
    body: 'Test message sent with Twilio',
    from: '+19282241513',
    to: '+14158468793',
  })
  .then((message) => console.log(message.sid));
