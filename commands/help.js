const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all commands that CHROMA bot can perform.'),
    async execute (interaction) {
        const embed = new EmbedBuilder()
            .setColor('#fc8c03')
            .setTitle('I heard you need help? ⚙️')
            .setThumbnail('https://i.imgur.com/HHmfcpT.jpg')
            .setDescription('Here are all the commands I can perform for you...')
            .addFields(
                {name: '/hello', value: 'I will say hi back to you. :^)'},
                {name: '/color', value: 'Change your color on the server with a select menu I send.'},
                {name: '/pronouns', value: 'Set your preferred pronouns as a role on the server with the select menu I send.'},
                {name: '/anime', value: 'Want info about an anime? Send me the title and I will give you basic information about it.'},
                {name: '/glados', value: 'I say a GLaDOS voice line'},
            )
            .setFooter({ text: 'C H R O M A', iconURL: 'https://imgur.com/KXtuGW5' });
            await interaction.reply({embeds: [embed]});
    },
};