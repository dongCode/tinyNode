const http = require('http');
const conf = require('./config/defaultConfig');
const log = console.log;
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url);
  fs.stat(filePath, (err, stat) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    if (stat.isFile) {
      res.writeHead(200, { 'Content—Type': 'text/plain' });
      fs.createReadStream(filePath).pipe(res);
    } else if(stat.isDirectory) {
      fs.readdir(filePath, (err, filse) => {
        if(err) {
          res.writeHead(200, { 'Content—Type': 'text/plain' });
          res.end(filse.join(','));
        }
      });
    }
  });

});
server.listen(conf.port, conf.hostname, () => {
  log(chalk.green(`server running at http//${conf.hostname}:${conf.port}`));
});
