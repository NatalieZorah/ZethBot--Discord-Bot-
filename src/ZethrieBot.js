require("dotenv").config();
const { Client, Routes, Collection } = require("discord.js");
const { registerCommands } = require("./utils/registry");

const { ZETH_BOT_TOKEN, ZETH_BOT_GUILD_ID, ZETH_BOT_CLIENT_ID } = process.env;

const client = new Client({
    intents: [],
    rest: { version: "10" },
});

client.rest.setToken(ZETH_BOT_TOKEN);

async function main() {
    try {
        client.slashCommands = new Collection();
        await registerCommands(client, "../commands");

        console.log("\nSlash Commands Collection:");
        console.log(client.slashCommands);

        console.log("\nStarted refreshing application (/) commands.");
        const slashCommandsJson = client.slashCommands.map((cmd) => {
            cmd.getSlashCommandJSON();
        });

        console.log("Command JSON:");
        console.log(slashCommandsJson);

        await client.rest.put(
            Routes.applicationGuildCommands(
                ZETH_BOT_CLIENT_ID,
                ZETH_BOT_GUILD_ID
            ),
            {
                body: [],
            }
        );
        console.log("Started login process.");
        await client.login(ZETH_BOT_TOKEN);
    } catch (err) {
        console.error(err);
    }
}

main();
