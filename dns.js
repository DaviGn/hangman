const dns = require('dns');
dns.promises.lookup('letscode.com.br').then(console.log).catch(console.error);
