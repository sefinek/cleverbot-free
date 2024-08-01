const RandomUserAgent = require('./useragent.js');
const { userAgent, secChUa, secChUaPlatform } = RandomUserAgent();

const DEFAULT_HEADERS = {
	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
	'Accept-Encoding': 'gzip, deflate, br, zstd',
	'Accept-Language': 'en-US;q=0.7',
	'Cache-Control': 'no-cache',
	'Connection': 'keep-alive',
	'Host': 'www.cleverbot.com',
	'Pragma': 'no-cache',
	'Sec-Ch-Ua': secChUa,
	'Sec-Ch-Ua-Mobile': '?0',
	'Sec-Ch-Ua-Platform': secChUaPlatform,
	'Sec-Fetch-Dest': 'document',
	'Sec-Fetch-Mode': 'navigate',
	'Sec-Fetch-Site': 'none',
	'Sec-Fetch-User': '?1',
	'Upgrade-Insecure-Requests': '1',
	'User-Agent': userAgent
};

const getValidHeaders = headers => {
	return Object.fromEntries(
		Object.entries(headers).filter(
			([, value]) => value !== undefined && value !== null
		)
	);
};

module.exports = getValidHeaders(DEFAULT_HEADERS);