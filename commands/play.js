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
            title: songInfo.title,
            url: songInfo.video_url,
        }

        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(song.url);

        dispatcher.on('start', () => {
            console.log('\`${song.title}\ is playing!`')
        });

        dispatcher.on('finish', () => {
            console.log('\`${song.title}\ is finished playing!`')
        });

        dispatcher.on('error', console.error);
        
        connection.disconnect();

    },
};