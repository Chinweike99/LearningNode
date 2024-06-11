const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'about.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\nWelcome to production');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}
fileOps();

// fs.readFile('./files/about.txt', "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// fs.readFile(path.join(__dirname, 'files', 'about.txt'), "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// console.log("Hello ...")

//   fs.writeFile("./files/reply.txt", "Learning Node.js", (err) => {
//     if (err) throw err;
//     console.log("File Saved")
// });

// fs.writeFile("./files/reply.txt", "Learning Node.js\n i would not stop learning and evolving", (err) => {
//     if (err) throw err;
//     console.log("write Saved")
// });

// fs.appendFile("./files/reply.txt", "\nBecoming a fullStack developer", (err) => {
//     if (err) throw err;
//     console.log("Append fIle Saved")
// });


// // Exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`Uncaught error ${err}`);
//     process.exit(1)
// })