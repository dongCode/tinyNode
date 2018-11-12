const http = require('http');
const conf = require('./config/defaultConfig');
const log = console.log;
const chalk = require('chalk');
const path = require('path');
const route = require('./route/route');


const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url);
  route(req, res, filePath);
});
server.listen(conf.port, conf.hostname, () => {
  log(chalk.green(`server running at http://${conf.hostname}:${conf.port}`));
});
