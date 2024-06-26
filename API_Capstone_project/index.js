const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3300;
const url = "https://v2.jokeapi.dev";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// let advices = [];

app.get('/', (req, res) => {
    res.render('index.ejs', { choice: "API contents"})
});


app.post('/postresponse', async (req, res) => {
    const category = req.body.category
   let choice ='';

   try {
    if (category === 'programming'){
        const response = await axios.get(url + "/joke/Programming");
        choice = response.data.joke;
       }else if (category === "music"){
        const response = await axios.get(url + "/joke/Miscellaneous")
        choice = response.data.joke;
       } else if (category === "dark"){
        const response = await axios.get(url + "/joke/Dark")
        choice = response.data.joke;
       }else if (category === "pun"){
        const response = await axios.get(url + "/joke/Pun")
        choice = response.data.joke;
       } else if (category === "spooky"){
        const response = await axios.get(url + "/joke/Spooky")
        choice = response.data.joke;
       } else {
        choice = "Invalid Category"
       }
   } catch(error){
    choice = "Error fetching choice"
   }
//     const category = req.body.category;
//     try {
//         const response = await axios.get(url + category);
//         if (response.data.jokes && response.data.jokes.length > 0){
//             const newJoke = response.data.jokes.map(joke => {
//                 return{
//                     category: joke.category,
//                     joke: joke.joke
//                 };
//             });
//             advices = newJoke;
//         }else{
//             advices = [{category: "None", joke: "No Jokes found"}];
//         }
//     }catch (error){
//         advices = [{category: "None", joke: error.message }];
//     }
    res.render('index.ejs', { choice })
});

app.listen(port, ()=> {
    console.log(`Listening to port: ${port}`);
})