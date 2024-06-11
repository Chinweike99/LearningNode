// Basic Node Server

const http = require('http');

const server = http.createServer(function(request, response){
    response.setHeader('Content-type', 'application/json');// Content type to be recieved
    response.setHeader('Access-Control-Allow-Origin', '*'); // Access should be from anywhere (*)
    response.writeHead(200); // Status code HTTP 200 Ok.

    // response would be an object, hence
    const dataObj = {
        id: 123,
        name: "Ken", email: "Ken2@gmail.com"
    };
    // convert response to string using JSON
    const data = JSON.stringify(dataObj);
    response.end(data);
});
// const PORT = process.env.PORT || 3004;

server.listen(3004, function(){
    console.log('Listening to port 3004');
})