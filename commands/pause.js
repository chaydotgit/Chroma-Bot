const { SlashCommandBuilder } = require('discord.js');
const { useQueue } = require('discord-player');
const { voiceCheck } = require("../voiceCheck");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pause the current queue'),
    async execute (interaction) {
        voiceCheck(interaction);

        const queue = useQueue(interaction.guild.id);
        queue.node.setPaused(!queue.node.isPaused());
        return interaction.reply('Queue has been paused.');
    },
};