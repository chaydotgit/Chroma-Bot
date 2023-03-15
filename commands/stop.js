const { SlashCommandBuilder } = require('discord.js');
const { useQueue } = require('discord-player');
// TODO:
// - implement handling of multiple subcommands
// - add queue for individual servers
// - implement pause
// - implement stop
// - implement skip
//
module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stops the music player and clears and queue'),
    async execute (interaction) {
        const channel = interaction.member.voice.channel;
        if (!channel) return interaction.reply('You need to enter a voice channel in order to use this command!');

        await interaction.deferReply();

        const queue = useQueue(interaction.guild.id);
        queue.delete();
        return interaction.followUp('Stopped playing and cleared queue!')
    },
};