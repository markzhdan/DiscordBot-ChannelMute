const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


require ('dotenv').config();

client.on('ready', () => {
    console.log('Channel Mute successfully logged in!')

    const GuildID = "1024432963137577052"
    const guild = client.guilds.cache.get(GuildID)
    let commands

    if(guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'mute',
        description: 'Mutes voice channel members'
    })

    commands?.create({
        name: 'unmute',
        description: 'Unmutes voice channel members'
    })
});

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) {
        return
    }

    const { commandName } = interaction
    if(commandName === 'mute'){
        let contentMessage
        if (interaction.member.roles.cache.some(role => role.name === 'Mute Permissions')) {
            const members = interaction.member.voice.channel.members;

            members.forEach(member => {
                member.voice.setMute(true);
            });
            contentMessage = 'Muted all members in your voice channel';
        }
        else {
            contentMessage = "You do not have the permissions to do that!"
        }

        interaction.reply({
            content: contentMessage,
            ephemeral: true,
        })
    }

    if(commandName === 'unmute'){
        let contentMessage
        if (interaction.member.roles.cache.some(role => role.name === 'Mute Permissions')) {
            const members = interaction.member.voice.channel.members;

            members.forEach(member => {
                member.voice.setMute(false);
            });
            contentMessage = 'Unmuted all members in your voice channel';
        }
        else {
            contentMessage = "You do not have the permissions to do that!"
        }

        interaction.reply({
            content: contentMessage,
            ephemeral: true,
        })
    }
})

client.login(process.env.TOKEN);