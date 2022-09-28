# DiscordBot-ChannelMute
A very simple (and buggy) bot that mutes all users in a voice channel. Exposing myself to discord.js

# Purpose
This bot mutes and unmutes all members of a specific voice channel.


# Features
1. Mute all members of a voice channel.

2. Unmute all members of a voice channel.

3. Exploring new Discord slash commands and my first attempt of developing a bot in JavaScript.


# Commands
**/mute**
- Requires "Mute Permissions" role
- Mutes all members in the user's respective voice channel

**/unmute**
- Requires "Mute Permissions" role
- Unmutes all members in the user's respective voice channel


# Bugs
When a user is not in a voice channel, an error gets thrown and the bot shuts down. 
Multiple attempts were tried to solve the problem including checking if "member.voice.channel" was null, try and catch exception, and caching solutions. 
None seemed to work
