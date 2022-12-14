const { SlashCommandBuilder } = require("discord.js");
const BaseSlashCommand = require("../../utils/BaseSlashCommand");

module.exports = class MuteSlashCommand extends BaseSlashCommand {
    constructor() {
        super("mute");
    }

    execute(client, interaction) {
        return interaction.reply({ content: "Mute Slash Command" });
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("View the stats of the bot")
            .toJSON();
    }
};
