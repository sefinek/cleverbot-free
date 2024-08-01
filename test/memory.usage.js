// eslint-disable-next-line no-unused-vars
const CleverBot = require('../index.js');

const formatMemoryUsage = data => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;

const memoryUsage = process.memoryUsage();
Object.entries(memoryUsage).forEach(([key, value]) => {
	console.log(`${key}: ${formatMemoryUsage(value)}`);
});