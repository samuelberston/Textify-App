// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')('AC8887b03849dfca90dfa2df97727cea52', 'f423f836053f183678ffb8ee1578032c');

client.messages
  .create({
    body: 'Test message sent with Twilio',
    from: '+19282241513',
    to: '+14158468793',
  })
  .then((message) => console.log(message.sid));
