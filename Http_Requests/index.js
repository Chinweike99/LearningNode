import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3100;

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome Tech bro</h1>");
// })

// Basically determines what is used behind then scenes to parse incoming data
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact/index.html');
    // res.send(req.rawHeaders);
})

app.post("/submit", (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})