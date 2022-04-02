const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/products' && method === 'GET') {
    res.writeHead(400);
    return res.end('[]');
  }

  if (url === '/products' && method === 'POST') {
    return res.end('Criado');
  }
  return res.end('Ok');
});

server.listen(8080);
