const { Client, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the WhatsApp client
const client = new Client();

client.on('qr', (qr) => {
    // Display the QR code in the terminal
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Web client is ready!');
});

client.on('message', message => {
    if(message.body.toLowerCase() === 'hello') {
        message.reply('hi');
        console.log(message.from);
    }
    });

// Start the client
client.initialize();
