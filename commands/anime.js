const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const querystring = require('querystring');
const { MessageEmbed } = require('discord.js');


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
        const result = await fetch(`https://api.jikan.moe/v3/search/anime?q=${animeTitle}`); // https response from query

        // Checks if status from https response is an error 
        if (result.status !== 200) {
            console.log(`Error from Jikan MAL API. Status: ${result.status}`);
            return interaction.reply('I\'m having technical difficulties <:KannaWhat:701947478605430857> すみません！')
        }

        // Jikan MAL search query has a key 'results' with all results that match the search query
        const data = await result.json();
        if (!data.results.length) {
            return interaction.reply('I can\'t find this anime...<:KannaWhat:701947478605430857>')
        }

        // Grabs first result from search query and displays information as embed
        const anime = data.results[0];
        console.log(anime);
        const embed = new MessageEmbed()
            .setColor('#fc0390')
            .setTitle(anime.title)
            .setImage(anime.image_url)
            .addFields(
                {name: 'URL', value: trim(anime.url, 1024)},
                {name: 'Episodes', value: trim(anime.episodes.toString(), 1024)},
                {name: 'Synopsis', value: trim(anime.synopsis, 1024)},
                {name: 'Rating', value: trim(anime.score.toString(), 1024)}
            )
        return interaction.reply({ embeds: [embed] });
    },
};