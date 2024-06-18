/* QUESTION.
 * Create a simple Express.js server that listens on port 3000 and responds with "Hello from Express"
 * when a get request is made to then root path (/).
 */

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send("Hello from Express");
});

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
