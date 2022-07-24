const http = require('http');

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);
    // console.table(req.headers);
    if (request.method === 'POST') {
        request.addListener('data', (data) => {
            response.setHeader('Content-Type', 'application/json');
            response.write(data);
            response.end();
        })
    } else {
        if (request.url === '/users') {
            response.write('User Endpoint');
        } else {
            response.write('Hello...');
        }
        response.end();
    }
});

server.listen(3000);
