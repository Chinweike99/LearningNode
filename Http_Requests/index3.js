import express from "express";
import morgan from "morgan";

const app = express();
const port = 3100;

// Creating custom midlleware
function logger(req, res, next){
    console.log("Request method is: ", req.method);
    console.log("Request method is: ", req.url);
    next()
}

app.use(logger);

app.get('/', (req, res) => {
    res.send("Welcome Dev");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})