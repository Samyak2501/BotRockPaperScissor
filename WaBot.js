const { Client } = require('whatsapp-web.js');
const client = new Client();

const qrcode = require('qrcode-terminal');

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body.toLowerCase() === 'hi') {
		message.reply('hello');
    }
});

client.on('message', message => {
if(message.body.toLowerCase() === 'hello') {
    message.reply('hi');
}
});



let start = false;

client.on('message', message => {
if(message.body.toLowerCase() === 'start'){
        client.sendMessage(message.from, 'STONE PAPER SCISSOR\n0.✊ STONE\n1.🖐 PAPER\n2.✌️ SCISSOR\nFOR POINTS SEND points\nFOR RESTART SEND restart');
        client.sendMessage(message.from, 'Bot selected ****');
        client.sendMessage(message.from, 'send 0, 1, or 2');
        start = true;
    }
});

    let Ppoint = 0;
    let Cpoint = 0;

    client.on('message', message => {
        let compPlay = Math.floor(Math.random() * 3);
    if(message.body.toLowerCase() === '0' && compPlay === 0 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: ✊ STONE\nBOT: ✊ STONE');
        client.sendMessage(message.from, 'TIE');
    }
    else if(message.body.toLowerCase() === '0' && compPlay === 1 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: ✊ STONE\nBOT: 🖐 PAPER');
        client.sendMessage(message.from, 'YOU LOSE');
        Cpoint +=1;
    }else if(message.body.toLowerCase() === '0' && compPlay === 2 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: ✊ STONE\nBOT: ✌️ SCISSOR');
        client.sendMessage(message.from, 'YOU WIN');
        Ppoint +=1;
    } else if(message.body.toLowerCase() === '1' && compPlay === 0 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: 🖐 PAPER\nBOT: ✊ STONE');
        client.sendMessage(message.from, 'YOU WIN');
        Ppoint +=1;
    }else if(message.body.toLowerCase() === '1' && compPlay === 1 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: 🖐 PAPER\nBOT: 🖐 PAPER');
        client.sendMessage(message.from, 'TIE');
    } else if(message.body.toLowerCase() === '1' && compPlay === 2 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: 🖐 PAPER\nBOT: ✌️ SCISSOR');
        client.sendMessage(message.from, 'YOU LOSE');
        Cpoint +=1;
    } else if(message.body.toLowerCase() === '2' && compPlay === 0 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: ✌️ SCISSOR\nBOT: ✊ STONE');
        client.sendMessage(message.from, 'YOU LOSE');
        Cpoint +=1;
    } else if(message.body.toLowerCase() === '2' && compPlay === 1 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: ✌️ SCISSOR\nBOT: 🖐 PAPER');
        client.sendMessage(message.from, 'YOU WIN');
        Ppoint +=1;
    } else if(message.body.toLowerCase() === '2' && compPlay === 2 && start===true){
        client.sendMessage(message.from, 'bot selected '+compPlay)
        client.sendMessage(message.from, 'YOU: ✌️ SCISSOR\nBOT: ✌️ SCISSOR');
        client.sendMessage(message.from, 'TIE');
    } else if(message.body.toLowerCase() > 2 || message.body.toLowerCase() < 0){
        client.searchMessages(message.from, 'Invalid choice')
    }
});

client.on('message', message =>{
    if(Cpoint === 10 && Ppoint != 10){
        client.sendMessage(message.from, 'YOU LOSE!')
        client.sendMessage(message.from, 'YOUR POINTS: '+Ppoint+'\nBOT POINTS: '+Cpoint);
        client.sendMessage(message.from, 'TO RESTART THE GAME SEND restart')
        client.sendMessage(message.from, 'TO CONTINUE GAMEN\nsend 0, 1, or 2')
    }else if(Ppoint === 10 && Cpoint != 10){
        client.sendMessage(message.from, 'YOU WIN!')
        client.sendMessage(message.from, 'YOUR POINTS: '+Ppoint+'\nBOT POINTS: '+Cpoint);
        client.sendMessage(message.from, 'TO RESTART THE GAME SEND restart')
        client.sendMessage(message.from, 'TO CONTINUE GAME\nsend 0, 1, or 2')
    }
});


client.on('message', message => {
    if(message.body.toLowerCase() === 'points'){
            client.sendMessage(message.from, 'YOUR POINTS: '+Ppoint+'\nBOT POINTS: '+Cpoint);
        }
    });

client.on('message', message => {
    if(message.body.toLowerCase() === 'restart'){
        client.sendMessage(message.from, 'YOUR POINTS: '+Ppoint+'\nBOT POINTS: '+Cpoint);
        Cpoint = 0;
        Ppoint = 0;
            client.sendMessage(message.from, 'STONE PAPER SCISSOR\n1.✊ STONE\n2.🖐 PAPER\n3.✌️ SCISSOR\nFOR POINTS SEND points\nFOR RESTART SEND restart');
            client.sendMessage(message.from, 'Bot selected ****');
            client.sendMessage(message.from, 'send 0, 1, or 2');
        }
    });
    



client.initialize();
