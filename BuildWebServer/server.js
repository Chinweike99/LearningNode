const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
// Initialize object
const myEmmitter = new Emitter();

const PORT = process.env.PORT || 3500;
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    let path;

    if (req.url === '/' || req.url === 'index.html'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        path = path.join(__dirname, 'views', 'index.html');
        fs.readFile(path, 'utf8', (err, data) => {
            res.end(data);
        })
    }

});

server.listen(PORT, () => console.log(`server runinng on port ${PORT}`));