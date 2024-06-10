

const fs = require("fs");

fs.writeFile("message.txt", "Introduction to Node.js", (err) => {
    if (err) throw err;
    console.log("File Saved")
});