const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}
// const cooldowns = new Discord.Collection();
// const songQueue = new Map();

client.once('ready', () => {
    console.log(client.user.tag + ' has logged in.');
    console.log('READY!');
});


// // implementing color change on reaction to message 
// const colorChangeMsg = '755976824734875769'
// const colorMap = {'1️⃣': 'TEAL', '2️⃣': 'GREEN', '3️⃣': 'BLUE', '4️⃣': 'PURPLE', '5️⃣': 'PINK', '6️⃣': 'REDPINK', '7️⃣': 'RED', '8️⃣': 'YELLOW', 
//                 '9️⃣': 'ORANGE', '🔟': 'GRAY', '🇦': 'BLACK', '🇧': 'WHITE'};
// client.on('messageReactionAdd', async (reaction, user) => {
//     await addRoleColor(reaction, user);
// });

// // removal of color upon unreacting to color change message 
// client.on('messageReactionRemove', async (reaction, user) => {
//     await removeRoleColor(reaction, user);
// });


client.on('interactionCreate', async interaction => {
// exit if message doesn't start with the prefix or was sent by client itself
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
    }
    
    // if (!message.content.startsWith(prefix) || message.author.client) {
    //     if (message.content === 'Chroma-Bot are you okay?') {
    //         message.channel.send('Everything that lives is designed to end. We are perpetually trapped in a never-ending spiral of life and death. Is this a curse? Or some kind of punishment? I often think about the god who blessed us with this cryptic puzzle...and wonder if we\'ll ever get the chance to kill him.')
    //     }
    //     else if (message.content === 'Chroma-Bot I don\'t feel so good') {
    //         let coping_skills = ["Go for a walk", "Spend some time with a pet", "Bake some cookies", "Make hot chocolate for yourself", "Take a nap",
    //                             "Go for a long drive", "Maybe go talk to a therapist lol im a bot", "Play some video games", "Talk to a friend", "Look at you. Sailing through the air majestically. Like an eagle. Piloting a blimp."];
    //         message.channel.send(coping_skills[Math.floor(Math.random() * 10)]);
    //     }
    //     else if (message.content === 'Good job Chroma-Bot') { 
    //         message.react('702070723190980679');
    //     }
    //     else if (message.content === 'Fuck you Chroma-Bot') {
    //         message.react('702071924154433537');
    //         message.channel.send('Stop complaining.');
    //     }
    //     else 
    //         return;
    // }

    // const args = message.content.slice(prefix.length).trim().split(/ +/);
    // const commandName = args.shift().toLowerCase();

    // if (!bot.commands.has(commandName))
    //     return;
    // const command = bot.commands.get(commandName);

    // if (!cooldowns.has(command.name)) {
    //     cooldowns.set(command.name, new Discord.Collection());
    // }

    // // calculates cooldown and notifies user how much time is left 
    // const now = Date.now();
    // const timestamps = cooldowns.get(command.name);
    // const cooldownAmount = (command.cooldown || 3) * 1000;
    // if (timestamps.has(message.author.id)) {
    //     const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    //     if (now < expirationTime) {
    //         const timeLeft = (expirationTime - now) / 1000;
    //         return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command. <:nezuko_disappointed:701948388807016550>`);
    //     }
    // }
    // timestamps.set(message.author.id, now);
    // setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // // executes command from list of commands
    // try { 
    //     if (commandName === "play" || commandName === "skip" || commandName === "stop") {
    //         const serverQueue = songQueue.get(message.guild.id);
    //         command.execute(message, args, songQueue, serverQueue);
    //     } else {
    //         command.execute(message, args);
    //     }
    // } catch (error) {
    //     console.error(error);
    //     message.reply('there was an error trying to execute that command!');
    // }

});

client.login(token);

// async function addRoleColor(reaction, user) {
//     console.log("Message Reaction Add Top");
//     let applyRole = async () => {
//         let emojiName = reaction.emoji.name;
//         console.log('emoji: ' + emojiName + " color: " + colorMap[emojiName]);
//         let role = reaction.message.guild.roles.cache.find(role => role.name === colorMap[emojiName]);
//         let member = reaction.message.guild.members.cache.find(member => member.id == user.id);
//         if (role && member) {
//             console.log("User " + member.displayName + " changed color to " + colorMap[emojiName]);
//             await member.roles.add(role);
//         }
//     };
//     if (reaction.message.partial) {
//         try {
//             let msg = await reaction.message.fetch();
//             console.log(msg.id);
//             if (msg.id === colorChangeMsg) {
//                 console.log("Cached - Applied");
//                 applyRole();
//             }
//         }
//         catch (err) {
//             console.log(err);
//         }
//     } else {
//         console.log("Not a Partial");
//         if (reaction.message.id === colorChangeMsg) {
//             console.log("Not a Partial - applied");
//             applyRole();
//         }
//     }
// }

// async function removeRoleColor(reaction, user) {
//     console.log("Message Reaction Removal");
//     let removeRole = async () => {
//         let emojiName = reaction.emoji.name;
//         let role = reaction.message.guild.roles.cache.find(role => role.name === colorMap[emojiName]);
//         let member = reaction.message.guild.members.cache.find(member => member.id == user.id);
//         if (role)
//             await member.roles.remove(role);
//     };
//     if (reaction.message.partial) {
//         try {
//             let msg = await reaction.message.fetch();
//             console.log(msg.id);
//             if (msg.id === colorChangeMsg) {
//                 console.log("Cached - Applied");
//                 removeRole();
//             }
//         }
//         catch (err) {
//             console.log(err);
//         }
//     } else {
//         console.log("Not a Partial");
//         if (reaction.message.id === colorChangeMsg) {
//             console.log("Not a Partial - applied");
//             removeRole();
//         }
//     }
// }
