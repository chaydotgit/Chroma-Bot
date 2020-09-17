const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    description: 'Play a song in the voice channel you\'re in.',
    usage: '[YT link]',
    async execute (message, args) {
        if (!message.member.voice.channel) {
            return message.channel.send(`You need to be in a voice channel to play music!`)
        }

        const songInfo = await ytdl.getInfo(args[0]);
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
        }

        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl(song.url), {volume: 0.4});

        dispatcher.on('start', () => {
            message.channel.send(`${song.title} is playing!`)
        });

        dispatcher.on('finish', () => {
            message.channel.send(`${song.title} is finished playing!`)
            connection.disconnect();
        });

        dispatcher.on('error', console.error);
    },
};