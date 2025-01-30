const { Client, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Web client is ready!');
});

client.on('message', async (message) => {
    if (!message.from.includes('@g.us')) {
        const button = new Buttons(
            'Click a button below:',
            [{ id: 'btn1', body: 'Button 1' }],
            'Test Title',
            'Test Footer'
        );
        await client.sendMessage(message.from, button);
        console.log('Button message sent!');
    }
});

client.initialize();

