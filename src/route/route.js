
const fs = require('fs');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

module.export = async function (req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      fs.createReadStream(filePath).pipe(res);
      return;
    } else if (stats.isDirectory()) {
      const files = readdir(filePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(files.join(','));
    }
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`${filePath} is NOT FOUND`);
    return;
  }
};