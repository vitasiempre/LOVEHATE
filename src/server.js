import * as http from 'http';
import * as path from 'path';

function handleRequest(req, res) {
  let pathname = req.url;

  if (pathname == '/') {
    pathname = '/index.html';
  }

  let ext = path.extname(pathname);

  const typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  let contentType = typeExt[ext] || 'text/plain';

  fs.readFile(__dirname + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}
