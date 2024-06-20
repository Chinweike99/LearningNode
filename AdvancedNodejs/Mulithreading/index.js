const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send("This page is non-blocking page");
});

app.get('/blocking', async (req, res) => {
    let counter = 0;
    for (let i=0; i < 20_000_000_000; i++){
        counter++;
    }
    res.status(200).send(`result is ${counter}`);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});