const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        if (!interaction.isCommand() && !interaction.isStringSelectMenu()) return;

        if (interaction.isStringSelectMenu()) {
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
                let newPronouns = [];
                let existingPronouns = []
                for (const pronoun of interaction.values) {
                    let hasPronoun = interaction.member.roles.cache.find(r => r.name === pronoun);
                    if (!hasPronoun) {
                        newPronouns.push(pronoun);
                        interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === pronoun));
                    } else {
                        existingPronouns.push(pronoun);
                    }
                }

                if (newPronouns.length != 0) {
                    await interaction.reply({ content: `${interaction.member.displayName}'s pronouns are: ${newPronouns.concat(existingPronouns).toString()}` });
                } else {
                    await interaction.reply({ content: `You have already added the pronouns ${existingPronouns.toString()}`, ephemeral: true});
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
    },
}