const EventEmitter = require('events');

const emitterData = new EventEmitter();

const craeteEmitter = (info) => {
    console.log(`message emitted: ${info}`);
}

emitterData.on("message", craeteEmitter);
emitterData.emit("message", "Done\ntry again later");