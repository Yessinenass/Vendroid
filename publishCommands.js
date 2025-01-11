module.exports = {
	async deploy(rawCommands) {
		const { SlashCommandBuilder } = require("@discordjs/builders");
		const { REST } = require("@discordjs/rest");
		const { Routes } = require("discord-api-types/v9");
		const {
			settings: { clientId, guildId },
		} = require("./configs/config.js");
		const rest = new REST({ version: "9" }).setToken("MTE5OTczNTExMzk3NDU1ODgwMg.GUE_8n.8rOygzuiRVb-Q5F6vemKM5I6MDUHYZhJOWdQgE");

		const slashCommands = rawCommands
			.map((rawCommand) => {
				let { name, description, options } = rawCommand.info;
				let command = new SlashCommandBuilder()
					.setName(name)
					.setDescription(description);

				if (options.length > 0) {
					options.map((option) => {
						let { name, description, type, required } = option;
						switch (type) {
							case "STRING":
								command.addStringOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
							case "INTEGER":
								command.addIntegerOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
							case "CHANNEL":
								command.addChannelOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
							case "BOOLEAN":
								command.addBooleanOption((input) =>
									input
										.setName(name)
										.setDescription(description)
										.setRequired(required),
								);
								break;
						}
					});
				}
				return command;
			})
			.map((command) => command?.toJSON());

		rest.put(Routes.applicationCommands(clientId), {
			body: slashCommands,
		})
			.then(() =>
				console.log("Successfully registered application commands."),
			)
			.catch(console.error);
	},
};

// { The Project Was Programmed And Devolped By Rqo } //