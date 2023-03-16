const { SlashCommandBuilder } = require('discord.js');
const { Player, useQueue } = require('discord-player');
const { voiceCheck } = require("../voiceCheck");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play audio from Spotify or Youtube.')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('Spotify or Youtube URL')
                .setRequired(false)),
    async execute (interaction) {
        const channel = voiceCheck(interaction);
        const url = interaction.options.getString('url');
        await interaction.deferReply();

        if (!url) {
            const queue = useQueue(interaction.guild.id);
            if (queue) {
                queue.node.setPaused(!queue.node.isPaused());
                return interaction.followUp('Continuing queue.');
            } else {
                return interaction.followUp('There is no current queue to play! Please attach a URL to play a song.')
            }
        } else {
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
        }
    },
};