const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('saying hi to user'),
    async execute (interaction) {
        return interaction.reply('hi!');
    },
};