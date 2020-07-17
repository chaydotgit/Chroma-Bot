module.exports = {
    name: 'hello',
    description: 'saying hi to user',
    execute (message, args) {
        message.channel.send('hi!');
    },
};