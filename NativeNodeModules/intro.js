const fs = require("fs")

fs.readFile('./introduction.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
})