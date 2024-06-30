const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3200;
const URL = "http://localhost:3300";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index.ejs",)
});

app.listen(port, () => {
    console.log(`Listening to PORT: ${port}`);
})