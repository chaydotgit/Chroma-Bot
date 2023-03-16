const { ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription('Changes color of user'),
    async execute (interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('color select')
                    .setPlaceholder('No Color Selected')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .addOptions([
                        {
                            label: 'Purple',
                            value: 'PURPLE',
                        },
                        {
                            label: 'Pink',
                            value: 'PINK',
                        },
                        {
                            label: 'Red Pink',
                            value: 'RED PINK',
                        },
                        {
                            label: 'Red',
                            value: 'RED',
                        },
                        {
                            label: 'Orange',
                            value: 'ORANGE',
                        },
                        {
                            label: 'Yellow',
                            value: 'YELLOW',
                        },
                        {
                            label: 'Green',
                            value: 'GREEN',
                        },
                        {
                            label: 'Mint Green',
                            value: 'MINT GREEN',
                        },
                        {
                            label: 'Teal',
                            value: 'TEAL',
                        },
                        {
                            label: 'Blue',
                            value: 'BLUE',
                        },
                        {
                            label: 'White',
                            value: 'WHITE',
                        },
                        {
                            label: 'Grey',
                            value: 'GREY',
                        },
                        {
                            label: 'Black',
                            value: 'BLACK',
                        },
                    ]),
            );
        
            const embed = new EmbedBuilder()
                    .setColor('#5d00ff')
                    .setTitle('🌈 Color Changer 🌈')
                    .setDescription('Change your user color with the menu below!')
                    .setImage('https://i.imgur.com/5co18Zm.png');
            await interaction.reply({embeds: [embed], components:[row]});
    },
};