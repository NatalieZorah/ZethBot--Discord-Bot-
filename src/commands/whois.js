const BaseSlashCommand = require("../utils/BaseSlashCommand");
const { SlashCommandBuilder } = require("discord.js");

module.exports = class WhoisSlashCommand extends BaseSlashCommand {
    constructor() {
        super("whois");
    }

    execute(client, interaction) {
        return interaction.reply({ content: "Whois Slash Command" });
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("Whois command.")
            .toJSON();
    }
};
