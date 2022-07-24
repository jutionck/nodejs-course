const http = require('http');
const {TodoService} = require('./src/service/todo.service');

const todoService = new TodoService();
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    if (request.method === 'GET') {
        todoService.list(request, response);
    } else if (request.method === 'POST') {
        todoService.add(request, response);
    } else if (request.method === 'PUT') {
        todoService.update(request, response);
    } else if (request.method === 'DELETE') {
        todoService.delete(request, response);
    }
});

server.listen(3000);
