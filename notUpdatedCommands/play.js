const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    description: 'Play a song in the voice channel you\'re in.',
    usage: '[YT link]',
    async execute (message, args, songQueue, serverQueue) {
        if (!message.member.voice.channel) {
            return message.channel.send(`You need to be in a voice channel to play music!`)
        }

        // acquire song info from ytdl
        const songInfo = await ytdl.getInfo(args[0]);
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
        }

        // If there isn't a song queue for the server, construct queue
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: message.member.voice.channel,
                connection: null,
                songs: [],
                volume: .4,
                playing:true
            };

            songQueue.set(message.guild.id, queueConstruct);
            queueConstruct.songs.push(song);

            try {
                var connection = await message.member.voice.channel.join();
                queueConstruct.connection = connection;
                const serverQueue = songQueue.get(message.guild.id)
                if (!song) {
                    serverQueue.voiceChannel.leave();
                    songQueue.delete(message.guild.id);
                    return;
                }
                play(message.guild, song, songQueue);
                
            } catch (err) {
                console.log(err);
                songQueue.delete(message.guild.id);
                return message.channel.send('I\'ve run into some technical difficulties, sorry about that!');
            }
        } else {
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            return message.channel.send(`${song.title} has been added to the queue!`);
        }
    },
};

function play(guild, song, songQueue) {
    const serverQueue = songQueue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        songQueue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url));
    dispatcher.on('start', () => {
        serverQueue.textChannel.send(`${song.title} is playing!`);
    });
    dispatcher.on('finish', () => {
        serverQueue.textChannel.send(`${song.title} is finished playing!`);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0], songQueue);
    });
    dispatcher.on('error', error => console.error(error));
}