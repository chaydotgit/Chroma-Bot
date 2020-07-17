const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});


client.on('message', message => {
// exit if message doesn't start with the prefix or was sent by bot itself
    if (!message.content.startsWith(prefix) || message.author.bot) {
        if (message.content === 'Chroma-Bot are you okay?') {
            message.channel.send('Everything that lives is designed to end. We are perpetually trapped in a never-ending spiral of life and death. Is this a curse? Or some kind of punishment? I often think about the god who blessed us with this cryptic puzzle...and wonder if we\'ll ever get the chance to kill him.')
        }
        else if (message.content === 'Chroma-Bot I don\'t feel so good') {
            let coping_skills = ["Go for a walk", "Spend some time with a pet", "Bake some cookies", "Make hot chocolate for yourself", "Take a nap",
                                "Go for a long drive", "Maybe go talk to a therapist lol im a bot", "Play some video games", "Talk to a friend", "Look at you. Sailing through the air majestically. Like an eagle. Piloting a blimp."];
            message.channel.send(coping_skills[Math.floor(Math.random() * 10)]);
        }
        else 
            return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command))
        return;
        
    try { 
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});

client.login(token);