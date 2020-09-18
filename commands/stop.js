module.exports = {
    name: 'stop',
    description: 'Stop music from playing in the voice channel you are in.',
    async execute (message, args, songQueue, serverQueue) {
        if (!message.member.voice.channel)
            return message.channel.send(`You need to be in a voice channel to stop music!`);
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    },
};