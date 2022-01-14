module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
        if (!interaction.isCommand() && !interaction.isSelectMenu()) return;

        if (interaction.isSelectMenu()) {
            if (interaction.customId == 'color select') {
                const existingColors = ["PURPLE", "PINK", "RED PINK", "RED", "ORANGE", "YELLOW", "GREEN", "MINT GREEN", "TEAL", "BLUE", "WHITE", "GREY", "BLACK"]

                let newColor = interaction.guild.roles.cache.find(r => r.name === interaction.values[0]);
                let currentColor = interaction.member.roles.cache.find(r => existingColors.includes(r.name))
                if (currentColor) {
                    interaction.member.roles.remove(currentColor);
                }
                interaction.member.roles.add(newColor);
                await interaction.reply({ content: `${interaction.member.displayName}'s color has been changed to ${newColor.name}!`, ephemeral: true });
                console.log(`${interaction.user.tag} changed their role color to ${newColor.name}`);
            }

            if (interaction.customId == 'pronoun select') {
                let pronoun = interaction.guild.roles.cache.find(r => r.name === interaction.values[0]);
                if (interaction.member.roles.cache.find(r => r = pronoun) != undefined) {
                    await interaction.reply({ content: `You have already added the pronouns ${pronoun.name}!`, ephemeral: true});
                } else {
                    interaction.member.roles.add(pronoun);
                    await interaction.reply({ content: `${interaction.member.displayName}'s pronouns are ${pronoun.name}!`});
                }
            }
        }

        const command = interaction.client.commands.get(interaction.commandName);
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
    },
}