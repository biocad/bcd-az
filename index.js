const http = require('http');

const server = http.createServer(
    
    (request, response) => {
        const name = request.headers['x-ms-client-principal-name'];
        const res  = "hello " +  name + "\n\n" + JSON.stringify(request.headers,null,2);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end();
    }
);

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
console.log(process);
