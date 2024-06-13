import express from 'express';
import path from 'path';
const app = express();
const PORT = 3100;

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome Tech bro</h1>");
// })

app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
    res.sendFile('./contact/contact.txt', { root: __dirname });
    // res.sendFile(path.join(__dirname, 'contact', 'contact.txt'));
    // res.send(req.rawHeaders);
})

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})