const { SlashCommandBuilder } = require('discord.js');
const { useQueue } = require('discord-player');
const {voiceCheck} = require("../voiceCheck");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stops the music player and clears and queue'),
    async execute (interaction) {
        voiceCheck(interaction);

        await interaction.deferReply();

        const queue = useQueue(interaction.guild.id);
        queue.delete();
        return interaction.followUp('Stopped playing and cleared queue!')
    },
};