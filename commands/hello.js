const { SlashCommandBuilder } = require('@discordjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('saying hi to user'),
    async execute (interaction) {
        return interaction.reply(`Hi, ${interaction.user.username}!`);
    },
};