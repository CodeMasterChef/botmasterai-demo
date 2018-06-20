const Botmaster = require('botmaster');
const MessengerBot = require('botmaster-messenger');

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

botmaster.addBot(messengerBot);


myIncomingMiddlewareController = async (bot, update) => {

    const userInfo = await bot.getUserInfo(update.sender.id);

    const rawMessage = {
        recipient: {
            id: update.sender.id,
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [
                        {

                            title: "Welcome!",
                            image_url: "https://www.google.com.vn/logos/doodles/2018/world-cup-2018-day-7-5109361306238976-5722646637445120-ssw.png",
                            subtitle: "We have the right hat for everyone.",
                            
                            buttons: [
                                {
                                    title: "View",
                                    type: "web_url",
                                    url: "https://www.medium.com/",
                                },
                                {
                                    title: "Close",
                                    type: "web_url",
                                    url: "https://www.medium.com/",
                                }
                            ]
                        },
                        
                    ]
                }
            }
        }
    };

    try {
        await bot.sendRawMessage(rawMessage);
    } catch (ex) {
        console.log(ex);
    }



}

botmaster.use({
    type: 'incoming',
    name: 'my-incoming-middleware',
    controller: myIncomingMiddlewareController
});
