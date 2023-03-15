const { SlashCommandBuilder } = require('discord.js');
const { Player } = require('discord-player');
// TODO:
// - implement handling of multiple subcommands
// - add queue for individual servers
// - implement pause
// - implement stop
// - implement skip
//
module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play audio from Spotify or Youtube.')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('Spotify or Youtube URL')
                .setRequired(true)),
    async execute (interaction) {
        const channel = interaction.member.voice.channel;
        if (!channel) return interaction.reply('You need to enter a voice channel in order to use this command!');
        const url = interaction.options.getString('url', true);

        await interaction.deferReply();

        try {
            const player = Player.singleton(interaction.client);
            const { track } = await player.play(channel, url, {
                requestedBy: interaction.user,
                nodeOptions: {
                    metadata: interaction
                }
            });
            return interaction.followUp(`**${track.title}** queued!`);
        } catch (e) {
            return interaction.followUp(`Something went wrong!`);
        }
    },
};