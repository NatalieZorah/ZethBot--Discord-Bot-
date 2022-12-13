const { EmbedBuilder } = require("discord.js");

module.exports = {
    copperCoins: 0,
    silverCoins: 0,
    electrumCoins: 0,
    goldCoins: 0,
    platinumCoins: 0,

    encounterRewards: function (rewardString) {
        if (!rewardString) {
            console.log("No reward string provided");
        }

        let rewards = rewardString.split(";");
        for (let i = 0; i < rewards.length; i++) {
            let reward = rewards[i];
            if (reward.includes(" cp")) {
                this.addCopperCoins(parseFloat(reward.replace(" cp", "")));
            } else if (reward.includes(" sp")) {
                this.addSilverCoins(parseFloat(reward.replace(" sp", "")));
            } else if (reward.includes(" ep")) {
                this.addElectrumCoins(parseFloat(reward.replace(" ep", "")));
            } else if (reward.includes(" gp")) {
                this.addGoldCoins(parseFloat(reward.replace(" gp", "")));
            } else if (reward.includes(" pp")) {
                this.addPlatinumCoins(parseFloat(reward.replace(" pp", "")));
            } else {
                console.log("Invalid reward string: " + reward);
            }
        }
    },

    addCopperCoins: function (amount) {
        if (!amount) {
            console.log("No amount provided");
            return;
        }

        if (amount <= 0) {
            console.log("Amount must be a positive number");
        }

        this.copperCoins += amount;
    },

    addSilverCoins: function (amount) {
        if (!amount) {
            console.log("No amount provided");
            return;
        }

        if (amount <= 0) {
            console.log("Amount must be a positive number");
        }

        this.silverCoins += amount;
    },

    addElectrumCoins: function (amount) {
        if (!amount) {
            console.log("No amount provided");
            return;
        }

        if (amount <= 0) {
            console.log("Amount must be a positive number");
        }

        this.electrumCoins += amount;
    },

    addGoldCoins: function (amount) {
        if (!amount) {
            console.log("No amount provided");
            return;
        }

        if (amount <= 0) {
            console.log("Amount must be a positive number");
        }

        this.goldCoins += amount;
    },

    addPlatinumCoins: function (amount) {
        if (!amount) {
            console.log("No amount provided");
            return;
        }

        if (amount <= 0) {
            console.log("Amount must be a positive number");
        }

        this.platinumCoins += amount;
    },

    getTotalRewards: function () {
        if (this.copperCoins > 10) {
            this.addSilverCoins(Math.trunc(this.copperCoins / 10));
            this.copperCoins = this.copperCoins % 10;
        }

        if (this.silverCoins > 10) {
            this.addGoldCoins(Math.trunc(this.silverCoins / 10));
            this.silverCoins = this.silverCoins % 10;
        }

        if (this.electrumCoins > 2) {
            this.addPlatinumCoins(Math.trunc(this.electrumCoins / 2));
            this.electrumCoins = this.electrumCoins % 2;
        }

        if (this.goldCoins > 10) {
            this.addPlatinumCoins(Math.trunc(this.goldCoins / 10));
            this.goldCoins = this.goldCoins % 10;
        }

        console.log("{+}====================={+}");
        console.log(" |   ENCOUNTER REWARDS   |");
        console.log("{+}====================={+}");
        console.log("   Platinum Coins: " + this.platinumCoins);
        console.log("   Gold Coins:     " + this.goldCoins);
        console.log("   Electrum Coins: " + this.electrumCoins);
        console.log("   Silver Coins:   " + this.silverCoins);
        console.log("   Copper Coins:   " + this.copperCoins);
        console.log("{+}====================={+}");

        const embed = new EmbedBuilder()
            .setColor("Purple")
            .setTitle("ENCOUNTER REWARDS")
            .addFields(
                {
                    name: `Platinum Coins:  ${this.platinumCoins}`,
                    value: "\u200B",
                },
                { name: `Gold Coins:  ${this.goldCoins}`, value: "\u200B" },
                {
                    name: `Electrum Coins:  ${this.electrumCoins}`,
                    value: "\u200B",
                },
                { name: `Silver Coins:  ${this.silverCoins}`, value: "\u200B" },
                { name: `Copper Coins:  ${this.copperCoins}`, value: "\u200B" }
            );

        return embed;
    },

    resetCoinCounts: function () {
        this.platinumCoins = 0;
        this.goldCoins = 0;
        this.electrumCoins = 0;
        this.silverCoins = 0;
        this.copperCoins = 0;
    },

    myFunction: function () {
        console.log(this);
    },
};
