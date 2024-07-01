const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();
const port = 3200;
const URL = "http://localhost:3300";

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main Page Route
app.get('/', async (req, res) => {
    try{
        const response = await axios.get(URL + "/posts");
        console.log(response);
        res.render("index.ejs", {posts: response.data});
    } catch (error) {
        res.status(500).json({message: "Error occured"})
    }
});

// Route rendering the Edit page
app.get('/new', (req, res) => {
    res.render("features.ejs", {heading: "Create Post", submit: "Add post"});
})



app.listen(port, () => {
    console.log(`Listening to PORT: ${port}`);
})