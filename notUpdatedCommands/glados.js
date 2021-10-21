module.exports = {
    name: 'glados',
    description: 'sends a glados voice line',
    execute (message, args) {
        let glados_lines = ["Science has now validated your birth mother's decision to abandon you on a doorstep.", "Well done. Here come the test results: \"You are a horrible person.\" That\'s what it says. We weren't even testing for that.",
        "Remember before when I was talking about smelly garbage standing around being useless? That was a metaphor. I was actually talking about you. And I\'m sorry. You didn't react at the time so I was worried it sailed right over your head. That\'s why I had to call you garbage a second time just now.",
        "I honestly, truly didn't think you'd fall for that trap. In fact, I designed a much more elaborate trap further ahead for when you got through with this easy one. If I'd known you'd let yourself get captured this easily, I'd have dangled a turkey leg on a rope from the ceiling."];
        message.channel.send(glados_lines[Math.floor(Math.random() * 4)]);
    },
};