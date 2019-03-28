const { promisify } = require('util');
const fs = require('fs');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
async function help(res, filepath) {
  try {
    const data = await stat(filepath);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    if (data.isFile()) {
      fs.createReadStream(filepath).pipe(res);
    } else if (data.isDirectory()) {
      try {
        const files = await readdir(filepath);
        res.end(files.join(','));
      } catch (err) {
        res.end(err + '');
      }
    }
    return;
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`${filepath} NOT FOUND`);
    return;
  }
}
exports.help = help;
