const userAgents = [
	// Windows - Chrome
	{
		agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
		secChUa: '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
		secChUaPlatform: '"Windows"'
	},

	// Windows - Firefox
	{
		agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0'
	}

	// MacOS - Chrome
	// {
	// 	agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	// 	secChUa: '"Google Chrome";v="120", "Chromium";v="120", "Mac OS X";v="14.1"',
	// 	secChUaPlatform: '"macOS"',
	// },

	// MacOS - Firefox
	// {
	// 	agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.1; rv:120.0) Gecko/20100101 Firefox/120.0',
	// 	secChUa: '"Firefox";v="120", "Gecko";v="20100101", "Mac OS X";v="14.1"',
	// 	secChUaPlatform: '"macOS"',
	// },
];

module.exports = () => {
	const RandomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
	return {
		userAgent: RandomUserAgent.agent,
		secChUa: RandomUserAgent.secChUa,
		secChUaPlatform: RandomUserAgent.secChUaPlatform
	};
};