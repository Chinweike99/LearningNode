import express from "express";
import morgan from "morgan";

const app = express();
const port = 3100;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Welcome Dev");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})