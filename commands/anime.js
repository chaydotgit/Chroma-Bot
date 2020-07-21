const fetch = require('node-fetch');
const querystring = require('querystring');

/*
* @todo: work on bot sending an embed w first result's title, synopsis, and number of episodes
*/

module.exports = {
    name: 'anime',
    description: 'Links specified anime\'s MyAnimeList page and shows description',
    async execute (message, args) {
        if (!args.length) {
            return message.channel.send('You must supply an anime name! <:Angry:701947676308013067>')
        }

        const query = querystring.stringify({ q: args.join(' ') });
        console.log(query);
        const result = await fetch(`https://api.jikan.moe/v3/search/anime?${query}`);
        console.log(result);
        if (result.status !== 200) {
            return message.channel.send('I\'m having technical difficulties trying to find this anime <:KannaWhat:701947478605430857> すみません！')
        }
        const data = await result.json();
        console.log('** ACTUAL DATA **');
        console.log(data);
    },
};