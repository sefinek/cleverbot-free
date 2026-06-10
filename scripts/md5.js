const crypto = require('node:crypto');

module.exports = data => crypto.createHash('md5').update(data).digest('hex');