/*QUESTION
 * Create a Route that handles a POST request from a form with a name input field. Use a body-parser to parse the form data and respond back to the user with a greetin message that includes the submitted name
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


// Middleware to serve static files from public dir
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// Route to handle form submission
app.post('/greet', (req, res) => {
	const name = req.body.name;
	res.send(`Thank you, ${name}`);
});


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

