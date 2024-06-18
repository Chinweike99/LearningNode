/* QUESTION:
 * Create a route that takes a dynamic parameter (/users/) and responds with a message like
 * "UserId: 123" when a GET request is made to /users/123.
 */

const express = require('express');
const app = express();
const PORT = 3000;

// Root Route.
app.get('/', (req, res) => {
	res.send("ExpressJs is fun");
});

// Route to handle dynamic parameter
app.get('/users/:id', (req, res) => {
	const userId = req.params.id;
	res.send(`UserId: ${userId}`);
});

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
