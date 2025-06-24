const CleverBot = require('./index.js');

CleverBot.config({
	debug: false,
	defaultLanguage: 'en',
	maxRetryAttempts: 5,
	retryBaseCooldown: 4000,
	cookieExpirationTime: 15768000,
});

const msg = 'Hello my buddy!';
const context = [];

(async () => {
	try {
		console.log('User message       :', msg);

		const res = await CleverBot.interact(msg, context);

		context.push(msg);
		context.push(res);

		console.log('Cleverbot response :', res);

		// console.log('\nSettings           :', CleverBot.getData());
	} catch (err) {
		console.error('Sorry, but something went wrong ):', err);
	}
})();