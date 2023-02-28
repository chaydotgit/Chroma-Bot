const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime')
        .setDescription('Links specified anime\'s MyAnimeList page and shows description')
        .addStringOption(option =>
            option.setName('title')
                .setDescription('anime title to search for')
                .setRequired(true)),
    async execute (interaction) {
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const animeTitle = interaction.options.getString('title');
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeTitle}`); // https response from query

        // Checks if status from https response is an error 
        if (response.status !== 200) {
            console.log(`Error from Jikan MAL API. Status: ${response.status}`);
            return interaction.reply('I\'m having technical difficulties <:KannaWhat:701947478605430857> すみません！')
        }

        // Jikan MAL search query has a key 'results' with all results that match the search query
        const responseJSON = await response.json();
        if (responseJSON.pagination.items.total === 0) {
            return interaction.reply('I can\'t find this anime...<:KannaWhat:701947478605430857>')
        }

        // Grabs first result from search query and displays information as embed
        const anime = responseJSON.data[0];
        console.log(anime);
        const embed = new EmbedBuilder()
            .setColor('#fc0390')
            .setTitle(anime.title)
            .setURL(anime.url)
            .setImage(anime.images.jpg.image_url)
            .addFields(
                {name: 'Synopsis', value: trim(anime.synopsis ? anime.synopsis : 'N/A', 1024)},
                {name: 'Episodes', value: trim(anime.episodes.toString(), 1024)},
                {name: 'Rating', value: trim(anime.score ? anime.score.toString() : 'N/A', 1024)}
            )
        return interaction.reply({ embeds: [embed] });
    },
};