const http = require('http');

const server = http.createServer(
    
    (request, response) => {
        const name = request.headers['x-ms-client-principal-name'];
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("hello " +  name);
    }
);

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
console.log(process);
