const { SlashCommandBuilder } = require("discord.js");
const BaseSlashCommand = require("../utils/BaseSlashCommand");

module.exports = class StatsSlashCommand extends BaseSlashCommand {
    constructor() {
        super("stats");
    }

    execute(client, interaction) {
        return interaction.reply({ content: "Stats Slash Command" });
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("View the stats of the bot")
            .toJSON();
    }
};
