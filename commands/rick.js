const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rick')
        .setDescription('Let rick know his actions are disappointing'),
    async execute (interaction) {
        interaction.reply('fuck you <@194720384141099016> <:takeitback:738560861819633705>');
    },
};