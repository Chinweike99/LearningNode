const { format } = require('date-fns');
const { v4: uuid } = require('uuid')

const fs = require("fs");
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:MM:ss')}`;
    const logItem = `${dateTime}\t ${uuid()}\t ${message}\n`;
    console.log(logItem);
    try{
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), logItem)
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;

// console.log(format(new Date(), 'yyyy-MM-dd\n\tHH:MM:ss'));

// console.log(uuid());
// console.log("Nodejs");