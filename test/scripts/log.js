const kleur = require('kleur');

/* Start tests */
const whiteMsg = text => {
	console.log(kleur.bgWhite(text));
};

/* Conversation */
const logUserMessage = (i, message) => {
	console.log(kleur.blue(`[Interaction ${i + 1}]: 🡸 ${message}`));
};

const logCleverbotResponse = (i, response) => {
	console.log(kleur.green(`[Interaction ${i + 1}]: 🡺 ${response}`));
};

/* Errors */
const logWrongResponse = i => {
	console.log(kleur.red(`CleverBOT did not return a response at interaction ${i + 1}.`));
	process.exit(1);
};

const logFatalError = (i, err) => {
	console.log(kleur.red(`Error during interaction ${i + 1}: ${err.message}`));
	process.exit(1);
};

module.exports = { whiteMsg, logUserMessage, logCleverbotResponse, logWrongResponse, logFatalError };