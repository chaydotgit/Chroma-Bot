const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('says hi to user'),
    async execute (interaction) {
        return interaction.reply(`Hi, ${interaction.member.displayName}!`);
    },
};