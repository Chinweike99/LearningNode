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
        res.render("index.ejs", {content: response.data});
    } catch (error) {
        res.status(500).json({message: "Error occured"})
    }
});

// Route rendering the Edit page
app.get('/new', (req, res) => {
    res.render("features.ejs", {heading: "Create Post", submit: "Add post"});
})

// Route for editing a page
app.get('/edit/:id', async (req, res) => {
    try{
        const result = await axios.get(`${URL}/posts/${req.params.id}`);
        console.log(result.data);
        res.render("features.ejs",{
            heading: "Modify Post",
            submit: "Update post",
            post: result.data,
        });
    }catch (error){
        res.status(500).json({message: "Error fetching data" })
    }
})

// Save and post created New post
app.post("/api/posts", async(req, res) => {
    try {
        const result = await axios.post(`${URL}/posts`, req.body);
        console.log(result.data);
        res.redirect("/");
    }catch(error) {
        res.status(500).json({message: error.message})
    }
});

// Partially update a post
app.post("/api/posts/:id", async(req, res) => {
    console.log("Updated ...");
    try{
        const result = await axios.patch(`${URL}/posts/${req.params.id}`, req.body);
        console.log(result.data);
        res.redirect("/");
    } catch (error){
        res.status(500).json(({message: error.message }))
    }
})


app.listen(port, () => {
    console.log(`Listening to PORT: ${port}`);
})