const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3300;

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen(port, ()=> {
    console.log(`Listening to port: ${port}`);
})