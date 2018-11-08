const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((rep, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html  ');
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>hi</h1>');
  res.write('</body>');
  res.end('</html>');
});

server.listen(port, hostname, () => {
  console.info(`server running at http://${hostname}:${port}/`);
});
