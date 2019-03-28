const http = require('http');
const chalk = require('chalk');
const hostname = '127.0.0.1';
const port = 3030;
const root = 'D:\\git\\tinyNode\\src\\demos\\src';
const path = require('path');
const { help }  = require('./helper/helper');

const server = http.createServer((req, res) => {
  const filepath = path.join(root, req.url);
  help(res, filepath);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${chalk.green(hostname)}:${port}`);
});
