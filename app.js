const Botmaster = require('botmaster');

const botmaster = new Botmaster();

const MessengerBot = require('botmaster-messenger');


const messengerSettings = {
    credentials: {
      verifyToken: 'morehardmoremoney',
      pageToken: 'EAAPE9g5H2FABAALaTDtoMaxhrZBX6COediOLoWDIeZCb3q5eu4HjMwuLzZC9SeAChUshEoO2ZB8z5mUtRZCzxX80IJ7pZAbXkyNjL2b73rgLZA6iZCIoqg93EDkCRR59cjQDSsj8d07TUtk6CkZAkfsr8HRkGmaBxiXDwoWRwR9vXgAZDZD',
      fbAppSecret: '6bb28e299667852d628a91ef66a17518',
    },
    webhookEndpoint: 'webhook1234', // botmaster will mount this webhook on https://Your_Domain_Name/messenger/webhook1234
  };

  const messengerBot = new MessengerBot(messengerSettings);

  botmaster.addBot(messengerBot);

  botmaster.use({
    type: 'incoming',
    name: 'my-incoming-middleware',
    controller: (bot, update) => {
      return bot.reply(update, 'Hello World!');
    }
  });