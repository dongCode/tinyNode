const http = require('http');
const chalk = require('chalk');
const hostname = '127.0.0.1';
const port = 3030;
const process = require('process');
const root = process.cwd();
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>filepath:${path.join(root, req.url)}</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${chalk.green(hostname)}:${port}`);
});
