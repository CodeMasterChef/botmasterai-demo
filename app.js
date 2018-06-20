const Botmaster = require('botmaster');
const MessengerBot = require('botmaster-messenger');
const SocketioBot = require('botmaster-socket.io');

const setting = {
    port: process.env.PORT || 3000
}

const botmaster = new Botmaster(setting);

const messengerSettings = {
    credentials: {
        verifyToken: process.env.FB_VERIFY_TOKEN,
        pageToken: process.env.FB_PAGE_TOKEN,
        fbAppSecret: process.env.FB_APP_SECRET,
    },
    webhookEndpoint: process.env.FB_WEBHOOK_END_POINT,
};

const messengerBot = new MessengerBot(messengerSettings);

const socketioSettings = {
    id: 'SOME_BOT_ID_OF_YOUR_CHOOSING',
    server: botmaster.server
};
const socketioBot = new SocketioBot(socketioSettings);

botmaster.addBot(socketioBot);
botmaster.addBot(messengerBot);


myIncomingMiddlewareController = async (bot, update) => {
    return bot.reply(update, 'Hello world!');
}

botmaster.use({
    type: 'incoming',
    name: 'my-incoming-middleware',
    controller: myIncomingMiddlewareController
});
