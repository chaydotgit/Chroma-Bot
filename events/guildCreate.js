const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildCreate,
    async execute(guild) {
        console.log(`The guild ${guild.name} has added the bot`);
        console.log(`Initializing guild roles...`);
        // initialize color roles
        guild.roles.create({ name: 'PURPLE', color: '#9b59b6' });
        guild.roles.create({ name: 'PINK', color: '#ffb8dd' });
        guild.roles.create({ name: 'RED PINK', color: '#e91e63' });
        guild.roles.create({ name: 'RED', color: '#ff0000' });
        guild.roles.create({ name: 'ORANGE', color: '#e74c3c' });
        guild.roles.create({ name: 'YELLOW', color: '#f1c40f' });
        guild.roles.create({ name: 'GREEN', color: '#2ecc71' });
        guild.roles.create({ name: 'MINT GREEN', color: '#7cfcc9' });
        guild.roles.create({ name: 'TEAL', color: '#1abc9c' });
        guild.roles.create({ name: 'BLUE', color: '#3498db' });
        guild.roles.create({ name: 'WHITE', color: '#ffffff' });
        guild.roles.create({ name: 'GREY', color: '#95a5a6' });
        guild.roles.create({ name: 'BLACK', color: '#141414' });

        //initialize pronoun roles
        guild.roles.create({ name: 'They/Them' });
        guild.roles.create({ name: 'She/Her' });
        guild.roles.create({ name: 'He/Him' });
    },
}