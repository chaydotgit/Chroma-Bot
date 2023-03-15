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
        .setName('skip')
        .setDescription('Skip the current song'),
    async execute (interaction) {
        const channel = interaction.member.voice.channel;
        if (!channel) return interaction.reply('You need to enter a voice channel in order to use this command!');

        await interaction.deferReply();

        const queue = useQueue(interaction.guild.id);
        queue.node.skip()
        return interaction.followUp(`Skipping song...`);
    },
};