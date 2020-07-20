const fetch = require('node-fetch');
const querystring = require('querystring');

//throws promise rejection warning for some reason...
module.exports = {
    name: 'anime',
    description: 'Links specified anime\'s MyAnimeList page and shows description',
    async execute (message, args) {
        if (!args.length) {
            return message.channel.send('You must supply an anime name! <:Angry:701947676308013067>')
        }

        const query = querystring.stringify({ q: args.join(' ') });

        const result = await fetch(`https://api.jikan.moe/v3/search/anime?${query}`).then(response => response.json());
        if (result.status != 200) {
            throw `Response: ${result.status}`;
        }
        console.log(result);
    },
};