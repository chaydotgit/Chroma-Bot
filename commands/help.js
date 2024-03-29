const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all commands that CHROMA bot can perform.'),
    async execute (interaction) {
        const embed = new EmbedBuilder()
            .setColor('#fc8c03')
            .setTitle('I heard you need help? ⚙️')
            .setThumbnail('https://i.imgur.com/KXtuGW5.png')
            .setDescription('Here are all the commands I can perform for you...')
            .addFields(
                {name: '/hello', value: 'I will say hi back to you. :^)'},
                {name: '/color', value: 'Change your color on the server with a select menu I send.'},
                {name: '/pronouns', value: 'Set your preferred pronouns as a role on the server with the select menu I send.'},
                {name: '/play [Spotify/Youtube URL]', value: 'Play a song from Spotify or Youtube in the voice channel you are in.'},
                {name: '/queue [Spotify/Youtube URL]', value: 'Queue a song to play.'},
                {name: '/skip', value: 'Skip the current song in queue.'},
                {name: '/stop', value: 'Stop audio player and clear the queue'},
                {name: '/anime', value: 'Want info about an anime? Send me the title and I will give you basic information about it.'},
                {name: '/glados', value: 'I say a GLaDOS voice line'},
                {name: '/ticket', value: 'Send a ticket to my developer if you experience any bugs while using me or improvements you think would be useful!'}
            )
            .setFooter({ text: 'C H R O M A', iconURL: 'https://i.imgur.com/KXtuGW5.png' });
            await interaction.reply({embeds: [embed]});
    },
};