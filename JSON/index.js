const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3100;

const recipeJSON =
'[{"id": "01","type": "entertainment","name": "Football","price": 2.99,"equipments": {"wears": {"name": "Jersey","preparation": "boot"},"club": {"name": "chelsea","spiciness": "Good club"},"footballer": [{"name": "Cole Palmer","age": "21","position": "forward"},{"name": "Nicolas Jackson","age": "20","position": "forward"},{"name": "Enzo Fernandez","age": "24","position": "midfielder"},{"name": "Moises Caicedo","age": "20","position": "midfielder"}]}},{"id": "02","type": "entertainment","name": "Music","price": 2.99,"equipments": {"wears": {"name": "Clothes","preparation": "Shoes"},"club": {"name": "MAVIN","spiciness": "Amazing Label"},"footballer": [{"name": "DON JAZZY","age": "Age: 45","position": "BOSS"},{"name": "Rema","age": "24","position": "Top artist"},{"name": "Tiwa Savage","Age: age": "43","position": "Top artist (Mama Mavin)"},{"name": "Arya Starr","age": "20","position": "Signee"}]}},{"id": "03","type": "entertainment","name": "Football","price": 2.99,"equipments": {"wears": {"name": "Jersey","preparation": "boot"},"club": {"name": "Man United","spiciness": "Good club"},"footballer": [{"name": "Marcus Rashford","age": "25","position": "forward"},{"name": "Andre Onana","age": "26","position": "Goal Keeper"},{"name": "Alejandro Garnacho","age": "23","position": "Forward"},{"name": "Mason Mount","age": "20","position": "midfielder"}]}}]'
  

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let info;

app.get('/', (req, res) => {
    res.render('index.ejs', {entertainment: info});
});

app.post('/game', (req, res) => {
    switch(req.body.chosen){
        case "chelsea":
            info = JSON.parse(recipeJSON)[0];
            break;
        case "mavin":
            info = JSON.parse(recipeJSON)[1];
            break;
        case "manu":
            info = JSON.parse(recipeJSON)[2];
            break;
        default:
            break;
    }
    res.redirect('/');
});

app.listen(PORT, ()=> {
    console.log(`PORT: ${PORT}`);
})