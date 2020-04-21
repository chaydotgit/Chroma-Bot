const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);

client.on('message', message => {
    if (message.content === `${prefix}hello`) {
        message.channel.send('hi!');
    }
    else if (message.content === `${prefix}rick`) {
        message.channel.send('Fuck you, Rick');
    }
    else if (message.content === 'fuck me') {
        message.channel.send('Right in front of my salad?')
    }
    else if (message.content == 'Chroma-Bot are you okay?') {
        message.channel.send('Everything that lives is designed to end. We are perpetually trapped in a never-ending spiral of life and death. Is this a curse? Or some kind of punishment? I often think about the god who blessed us with this cryptic puzzle...and wonder if we\'ll ever get the chance to kill him.')
    }
});