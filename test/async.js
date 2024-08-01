const CleverBot = require('../index.js');
const { whiteMsg, logUserMessage, logCleverbotResponse, logWrongResponse, logFatalError } = require('./scripts/log.js');

// Add the --debug flag to start debugging: node test/async.js --debug
const isDebugMode = process.argv.slice(2).includes('--debug');
if (isDebugMode) CleverBot.config({ debug: true });

// Variables
const message = 'Do you like kittens?';
let context = [];
const totalInteractions = 10;

const interactWithCleverBot = async () => {
	for (let i = 0; i < totalInteractions; i++) {
		let sessionData = CleverBot.getData();

		const messageToSend = i === 0 ? message : context[context.length - 1];
		logUserMessage(sessionData.session.ns, messageToSend);

		try {
			const res = await CleverBot.interact(messageToSend, context, 'en');
			if (!res) return logWrongResponse(sessionData.session.ns);

			if (i === 4) {
				whiteMsg('» Starting new session... Executing newSession()');

				CleverBot.newSession();
				sessionData = CleverBot.getData();
				context = [];

				if (sessionData.cookie.data[0].content) throw new Error(`${sessionData.cookie.data[0].content} is not null or undefined`);
				if (sessionData.cookie.data[0].lastUpdate) throw new Error('sessionData.cookie.data[0].lastUpdate is not null or undefined');
				if (sessionData.session.cbsId) throw new Error('sessionData.session.cbsId is not null or undefined');
				if (sessionData.session.xai) throw new Error('sessionData.session.xai is not null or undefined');
				if (sessionData.session.ns) throw new Error('sessionData.session.ns is not null or undefined');
				if (sessionData.session.lastResponse) throw new Error('sessionData.session.lastResponse not null or undefined');
			}

			context.push(messageToSend);
			context.push(res);

			logCleverbotResponse(sessionData.session.ns, res);

			if (i + 1 === totalInteractions) {
				whiteMsg(`» Finished! successfulRequestsCount: ${sessionData.request.successfulRequestsCount}; failedRequestsCount: ${sessionData.request.failedRequestsCount}`);
			}
		} catch (err) {
			logFatalError(sessionData.session.ns, err);
			break;
		}
	}

	if (isDebugMode) console.debug(CleverBot.getData());
};

whiteMsg(`» Starting async/await test (version ${CleverBot.version})...`);
interactWithCleverBot().then(() => console.log());