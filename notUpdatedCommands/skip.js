module.exports = {
    name: 'skip',
    description: 'Skip to the next song on the server\'s song queue!',
    async execute (message, args, songQueue, serverQueue) {
        if (!message.member.voice.channel)
            return message.channel.send(`You need to be in a voice channel to skip songs!`);
        if (!serverQueue) 
            return message.channel.send(`There is no song that I could skip!`);
        serverQueue.connection.dispatcher.end();
    },
};