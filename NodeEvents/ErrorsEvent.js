const fs = require('fs');
const { EventEmitter } = require('stream');

function readFile(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            // Emit an error event with an error object
            emitter.emit('error', err);
        } else{
            console.log(data);
        }
    });
}

const emitter = new EventEmitter();
emitter.on("error", (error) => {
    console.error("Error reading file", error.message)
})
readFile('invalidFile.txt');