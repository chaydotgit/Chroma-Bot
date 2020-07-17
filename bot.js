const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);
message.channel.send("Chroma-Bot is online")

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
    else if (message.content === 'Chroma-Bot are you okay?') {
        message.channel.send('Everything that lives is designed to end. We are perpetually trapped in a never-ending spiral of life and death. Is this a curse? Or some kind of punishment? I often think about the god who blessed us with this cryptic puzzle...and wonder if we\'ll ever get the chance to kill him.')
    }
    else if (message.content === 'Chroma-Bot I don\'t feel so good') {
        let coping_skills = ["Go for a walk", "Spend some time with a pet", "Bake some cookies", "Make hot chocolate for yourself", "Take a nap",
                             "Go for a long drive", "Maybe go talk to a therapist lol im a bot", "Play some video games", "Talk to a friend", "Look at you. Sailing through the air majestically. Like an eagle. Piloting a blimp."];
        message.channel.send(coping_skills[Math.floor(Math.random() * 10)]);
    }
    else if (message.content === `${prefix}glados`) {
        let glados_lines = ["Science has now validated your birth mother's decision to abandon you on a doorstep.", "Well done. Here come the test results: \"You are a horrible person.\" That\'s what it says. We weren't even testing for that.",
        "Remember before when I was talking about smelly garbage standing around being useless? That was a metaphor. I was actually talking about you. And I\'m sorry. You didn't react at the time so I was worried it sailed right over your head. That\'s why I had to call you garbage a second time just now.",
        "I honestly, truly didn't think you'd fall for that trap. In fact, I designed a much more elaborate trap further ahead for when you got through with this easy one. If I'd known you'd let yourself get captured this easily, I'd have dangled a turkey leg on a rope from the ceiling."];
        message.channel.send(glados_lines[Math.floor(Math.random() * 4)]);
    }

});