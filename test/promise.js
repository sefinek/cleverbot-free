const CleverBot = require('../index.js');
const { whiteMsg, logUserMessage, logCleverbotResponse, logWrongResponse, logFatalError } = require('./scripts/log.js');

// Add the --debug flag to start debugging: node test/promise.js --debug
const isDebugMode = process.argv.slice(2).includes('--debug');
if (isDebugMode) CleverBot.config({ debug: true });

// Variables
const message = 'Cat';
const context = [];
const totalInteractions = 4;

const interactWithCleverBot = i => {
	if (i >= totalInteractions) {
		const sessionData = CleverBot.getData();
		whiteMsg(`» Finished! successfulRequestsCount: ${sessionData.request.successfulRequestsCount}; failedRequestsCount: ${sessionData.request.failedRequestsCount}`);
		return;
	}

	const sessionData = CleverBot.getData();

	const messageToSend = i === 0 ? message : context[context.length - 1];
	logUserMessage(sessionData.session.ns, messageToSend);

	CleverBot.interact(messageToSend, context, 'en')
		.then(res => {
			if (!res) return logWrongResponse(sessionData.session.ns);

			context.push(messageToSend);
			context.push(res);

			logCleverbotResponse(sessionData.session.ns, res);
			interactWithCleverBot(sessionData.session.ns + 1);
		})
		.catch(err => {
			logFatalError(sessionData.session.ns, err);
			interactWithCleverBot(sessionData.session.ns + 1);
		});
};

whiteMsg(`» Starting promise test (version ${CleverBot.version})...`);
interactWithCleverBot(0);