const { SlashCommandBuilder } = require('@discordjs/builders');
const { SpeechEvents } = require('discord-speech-recognition')
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('The bot will join your current voice channel or any other voice channel if you specify one.')
        .addChannelOption(option => 
            option.setName('channel')
            .setDescription('The voice channel to join.')
            .setRequired(false)),

    async execute(client, interaction) {
        let voiceChannel = interaction.member?.voice.channel;

        if(!voiceChannel) {
            if(interaction.options.getChannel('channel') && interaction.options.getChannel('channel').type == '2') {
                voiceChannel = interaction.options.getChannel('channel')
            } else {
                await interaction.reply({ text: "You need to be either in a voice channel or specify a voice channel to join.", ephemeral: true});
                return;
            }
        }

        joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator,
            selfDeaf: false
        });

        await interaction.reply(`Joined ${voiceChannel}`);
    }
}