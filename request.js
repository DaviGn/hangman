const http = require('http');

const options = {
  host: 'localhost',
  port: 8080,
  path: '/products',
  method: 'GET',
};

const request = http.request(options, (response) => {
  console.log(`STATUS: ${response.statusCode}`);
});

request.end();
