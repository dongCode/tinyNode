
const fs = require('fs');
const { promisify } = require('util');
const path = require('path');
const handlebars = require('handlebars');
//const config = require('../config/defaultConfig');

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const tplPath = path.join(__dirname, '../views/dir.tpl');
const source = fs.readFileSync(tplPath);
const view = handlebars.compile(source.toString());

module.exports = async function (req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      fs.createReadStream(filePath).pipe(res);
      return;
    } else if (stats.isDirectory()) {
      const files =  await readdir(filePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      const data = {
        title: filePath,
        dir: filePath,
        files
      };
      res.end(view(data));
    }
  } catch (err) {
    console.log(err);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`${filePath} is NOT FOUND`);
    return;
  }
};
