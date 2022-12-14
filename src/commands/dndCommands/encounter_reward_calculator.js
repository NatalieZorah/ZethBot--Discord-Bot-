const { SlashCommandBuilder } = require("discord.js");
const calculator = require("../../classes/RewardsCalculator.js");
const BaseSlashCommand = require("../../utils/BaseSlashCommand");

module.exports = class CalculatorSlashCommand extends BaseSlashCommand {
    constructor() {
        super("calcrewards");
    }

    execute(interaction) {
        const input = interaction.options.getString("input");
        calculator.encounterRewards(input);
        let embed = calculator.getTotalRewards();
        interaction.reply({ embeds: [embed] });
        calculator.resetCoinCounts();
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(
                "Returns calculated rewards from the reward string!"
            )
            .addStringOption((option) =>
                option
                    .setName("input")
                    .setDescription("Reward string to calculate.")
                    .setRequired(true)
            )
            .toJSON();
    }
};
