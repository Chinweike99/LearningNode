/*QUESTION
 * Serve a static HTML, CSS and javaScript files from a designated public directory using Express.js's built-in static middleware
 */

const express = require('express');
const app = express();
const PORT = 3000;


// Middleware to serve static files from public dir
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

