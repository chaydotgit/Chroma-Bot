const { SlashCommandBuilder } = require('discord.js');
const { useMasterPlayer, useQueue } = require('discord-player');
const { voiceCheck } = require("../voiceCheck");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('queue a song')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('Spotify or Youtube URL of song to queue')
                .setRequired(true)),
    async execute (interaction) {
        voiceCheck(interaction);

        const player = useMasterPlayer();
        const url = interaction.options.getString('url', true);
        await interaction.deferReply();

        const queue = useQueue(interaction.guild.id);
        const searchResult = await player.search(url, { requestedBy: interaction.user });
        queue.addTrack(searchResult.tracks[0]);
        return interaction.followUp(`Added **${searchResult.tracks[0].title}** to queue`);
    },
};