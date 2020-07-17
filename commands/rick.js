module.exports = {
    name: 'rick',
    description: 'Let rick know his actions are disappointing',
    execute (message, args) {
        message.channel.send('fuck you rick');
    },
};