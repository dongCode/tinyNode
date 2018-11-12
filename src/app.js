const http = require('http');
const conf = require('./config/defaultConfig');
const log = console.log;
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url);
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`${filePath} is NOT FOUND`);
      return;
    }
    if (stats.isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      fs.createReadStream(filePath).pipe(res);
      return;
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, filse) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(err);
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(filse.join(','));
      });
    }
  });

});
server.listen(conf.port, conf.hostname, () => {
  log(chalk.green(`server running at http://${conf.hostname}:${conf.port}`));
});
