const { SlashCommandBuilder } = require('discord.js');
const { useMasterPlayer, useQueue } = require('discord-player');
// TODO:
// - implement handling of multiple subcommands
// - add queue for individual servers
// - implement pause
// - implement stop
// - implement skip
//
module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('queue a song')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('Spotify or Youtube URL of song to queue')
                .setRequired(true)),
    async execute (interaction) {
        const channel = interaction.member.voice.channel;
        if (!channel) return interaction.reply('You need to enter a voice channel in order to use this command!');

        const player = useMasterPlayer();
        const url = interaction.options.getString('url', true);
        await interaction.deferReply();

        const queue = useQueue(interaction.guild.id);
        const searchResult = await player.search(url, { requestedBy: interaction.member });
        queue.addTrack(searchResult.tracks[0]);
        return interaction.followUp(`Added **${searchResult.title}** to queue`);
    },
};