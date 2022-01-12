const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription('Changes color of user'),
    async execute (interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select color')
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
        
            const embed = new MessageEmbed()
                    .setColor('#5d00ff')
                    .setTitle('🌈 Color Changer 🌈')
                    .setDescription('Change your user color with the menu below!');
            await interaction.reply({ephemeral: true, embeds: [embed], components:[row]});
    },
};