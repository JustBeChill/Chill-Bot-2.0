const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Suggest an idea for a command! It will be sent straight to Chill')
        .addStringOption(option =>
            option.setName('name')
            .setDescription('The name of the command')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('description')
            .setDescription('A description of what the command would do')
            .setRequired(true)),

    async execute(client, interaction) {

        if(interaction.member.id == '464864064749961229') {
            interaction.reply("This is your punishment for spamming >:(")
            interaction.member.send("🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵 🥵")
            return;
        }

        interaction.reply("Your suggestion has been sent to the supreme overlord")
        client.me.send("**" + interaction.user.username + "** suggested a command:\nName: " + interaction.options.getString('name') + "\nDescription: " + interaction.options.getString('description'))
    }
}