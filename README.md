# Chroma-Bot
Personal Discord bot to practice Javascript and NodeJS with. Currently hosted on AWS!

![GitHub last commit](https://img.shields.io/github/last-commit/chaydotgit/Chroma-Bot?style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/chaydotgit/Chroma-Bot?style=for-the-badge)](https://github.com/chaydotgit/Chroma-Bot/issues)

## 
Discord bot that is able to handle basic commands, play music in voice channels, as well as let server members change role colors!
Handles commands such as:
- /hello : says hi back to the user
- /help : Lists all commands Chroma Bot can perform
        <p align="center">
        ![image](https://user-images.githubusercontent.com/26285957/222298515-04c82899-169b-4e05-a5f8-8051b96b4095.png)
        </p>
- /ticket : Sends a ticket to the developer if a user would like to notify of any bugs they encounter or ideas they think would improve the bot.
        <p align="center">
        ![image](https://user-images.githubusercontent.com/26285957/222298805-83b70b21-eee0-47fa-b992-e7194565b7bd.png)
        <p>
- /play [Spotify/YT URL] : Play a song in the voice channel you are in from Spotify or Youtube.
- /skip : Skip the current song in the queue.
- /queue [Spotify/YT URL] : Queue a song to be played in the voice channel.
- /stop : Stop the audio player and clear the server's queue
        <p align="center">
        ![image](https://user-images.githubusercontent.com/26285957/225187174-be32094a-d947-478d-8340-8f0b23772c00.png)
        </p>
- /anime [title] : searches MAL for top result of title given and displays info.  
        <p align="center">
        ![image](https://user-images.githubusercontent.com/26285957/222009447-5c7d0f20-19e7-4e1b-aece-8c3288271dbd.png)
        </p>
- /color : allows users to change their server colors through a select menu  
        <p align="center">
        ![image](https://user-images.githubusercontent.com/26285957/222009599-4fcdf4a1-93ed-46b4-8fdd-f325b3dbaade.png)
        </p>
- /pronouns : Displays select menu for users to set their preferred pronouns. The pronouns are viewable through the user's roles.
        <p align="center">
        ![image](https://user-images.githubusercontent.com/26285957/222009740-ed1614c5-a4ff-4a2c-8c26-21eb1e9322e5.png)
        </p>
- /glados : sends a GLaDOS line to the channel

__Base code was implemented following [Discord.js Guide](https://discordjs.guide/#before-you-begin).__

__Anime commands done with the help of [Jikan MAL API](https://jikan.moe/).__
