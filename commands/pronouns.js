const { ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pronouns')
        .setDescription('Lets user select their pronouns'),
    async execute (interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('pronoun select')
                    .setPlaceholder('No Pronouns Selected')
                    .setMinValues(1)
                    .setMaxValues(3)
                    .addOptions([
                        {
                            label: 'They/Them',
                            value: 'They/Them',
                        },
                        {
                            label: 'She/Her',
                            value: 'She/Her',
                        },
                        {
                            label: 'He/Him',
                            value: 'He/Him',
                        },
                    ]),
            );
        
            const embed = new EmbedBuilder()
                    .setColor('#00f2ff')
                    .setTitle('Hello! What are your pronouns? ')
                    .setDescription('Select your preferred pronouns. You may select multiple from the menu. Pronouns will be list under your roles :^)');
            await interaction.reply({embeds: [embed], components:[row]});
    },
};