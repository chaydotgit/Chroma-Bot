module.exports = {
    voiceCheck(interaction) {
        const channel = interaction.member.voice.channel;
        if (!channel) return interaction.reply('You need to enter a voice channel in order to use this command!');
        return channel;
    }
};