// Zero-dependency static server for wiw. Run: node server.js  ->  http://localhost:3000
const http = require('http'), fs = require('fs'), path = require('path');
const PORT = process.env.PORT || 3000, ROOT = __dirname;
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon','.webp':'image/webp'};
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, path.normalize(p));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache'});
    res.end(data);
  });
}).listen(PORT, () => console.log(`wiw running at http://localhost:${PORT}`));
