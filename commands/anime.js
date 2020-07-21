const fetch = require('node-fetch');
const querystring = require('querystring');
const { MessageEmbed } = require('discord.js');

/*
* @todo: work on bot sending an embed w first result's title, synopsis, and number of episodes
*/

module.exports = {
    name: 'anime',
    description: 'Links specified anime\'s MyAnimeList page and shows description',
    async execute (message, args) {
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
        
        if (!args.length) {
            return message.channel.send('You must supply an anime name! <:Angry:701947676308013067>')
        }

        const query = querystring.stringify({ q: args.join(' ') });
        const result = await fetch(`https://api.jikan.moe/v3/search/anime?${query}`);
        if (result.status !== 200) {
            return message.channel.send('I\'m having technical difficulties <:KannaWhat:701947478605430857> すみません！')
        }
        const data = await result.json();
        if (!data.results.length) {
            return message.channel.send('I can\'t find this anime...<:KannaWhat:701947478605430857>')
        }
        const anime = data.results[0];
        console.log(anime);
        const embed = new MessageEmbed()
            .setColor('#fc0390')
            .setTitle(anime.title)
            .addFields(
                {name: 'URL', value: trim(anime.url, 1024)},
                {name: 'Episodes', value: trim(anime.episodes, 1024)},
                {name: 'Synopsis', value: trim(anime.synopsis, 1024)},
                {name: 'Rating', value: trim(anime.score, 1024)}
            )
        return message.channel.send(embed);
    },
};