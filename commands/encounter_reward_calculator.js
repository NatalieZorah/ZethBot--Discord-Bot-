const { SlashCommandBuilder } = require("discord.js");
const calculator = require("../classes/RewardsCalculator.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("calcrewards")
        .setDescription("Returns calculated rewards from the reward string!")
        .addStringOption((option) =>
            option
                .setName("input")
                .setDescription("Reward string to calculate.")
                .setRequired(true)
        ),
    async execute(interaction) {
        const input = interaction.options.getString("input");
        calculator.encounterRewards(input);
        let embed = calculator.getTotalRewards();
        await interaction.reply({ embeds: [embed] });
        calculator.resetCoinCounts();
    },
};
