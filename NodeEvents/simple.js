const MyEmitter = require('events');

//Create an event emitter
const myEmitter = new MyEmitter();

// Define a listener function
function handleEvent(data){
    console.log(`Data recieved:  ${data} \nwelldone`);
}

// Subscribe the listener to the 'message' event
myEmitter.on('message', handleEvent);

// Emit the event with some data
myEmitter.emit('message', 'message emitted');