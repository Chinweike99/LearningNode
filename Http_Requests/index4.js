import bodyParser from 'body-parser';
import express from 'express';
// import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3100;
var bandName = "";

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator(req, res, next){
    console.log(req.body);
    bandName = req.body["street"] + req.body["pet"];
    next();
}

app.use(bandNameGenerator);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/contact/index.html");
});

app.post('/submit', (req, res) => {
    res.send(`Your band name is: <h2>${bandName}<h2>`)
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})