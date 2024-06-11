const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// Initialize object
const myEmmitter = new MyEmitter();

// addListener for the log event
myEmmitter.on('log', (msg) => logEvents(msg));
setTimeout(() => {
    myEmmitter.emit('log', 'log Event emitted!');
}, 2000);