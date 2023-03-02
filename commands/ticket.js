const { SlashCommandBuilder, userMention } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Send a ticket with bugs or improvements to my developer!')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('bug or improvement to send to my developer')
                .setRequired(true)),
    async execute (interaction) {
        interaction.client.users.send('186685751285514240', `The user ${userMention(interaction.options.getUser('target').id)} sent the following ticket: ${interaction.options.getString('message')}`);
        return interaction.reply( { content: `Hi, ${interaction.user.username}! Your ticket was sent to my developer! Thank you for your help in my improvements. :^)`, 
                                    ephemeral: true });
    },
};